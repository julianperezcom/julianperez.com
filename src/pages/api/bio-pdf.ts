export const prerender = false

import type { APIRoute } from 'astro'
import PDFDocument from 'pdfkit'
import { getBio } from '../../lib/sanity'
import { STATIC_BIO_EN, STATIC_BIO_ES } from '../../lib/bio'

function htmlToPlainParagraphs(html: string): string[] {
  return html
    .split(/<br\s*\/?>\s*<br\s*\/?>/)
    .map(p =>
      p
        .replace(/<br\s*\/?>/g, ' ')
        .replace(/<[^>]+>/g, '')
        .replace(/&amp;/g, '&')
        .replace(/&lt;/g, '<')
        .replace(/&gt;/g, '>')
        .replace(/&nbsp;/g, ' ')
        .replace(/\s+/g, ' ')
        .trim()
    )
    .filter(Boolean)
}

function generatePdf(bioHtml: string, lang: string): Promise<Buffer> {
  return new Promise((resolve, reject) => {
    const doc = new PDFDocument({
      size: 'A4',
      margins: { top: 64, bottom: 64, left: 64, right: 64 },
      info: {
        Title: 'Julian Perez — Biography',
        Author: 'Julian Perez',
        Subject: 'Artist Biography',
      },
    })

    const chunks: Buffer[] = []
    doc.on('data', chunk => chunks.push(Buffer.from(chunk)))
    doc.on('end', () => resolve(Buffer.concat(chunks)))
    doc.on('error', reject)

    const W = doc.page.width - 128

    // ── Header ────────────────────────────────────────────────
    doc
      .font('Helvetica-Bold')
      .fontSize(20)
      .fillColor('#0e0e0e')
      .text('JULIAN PEREZ', 64, 64)

    doc
      .font('Helvetica')
      .fontSize(7)
      .fillColor('#999999')
      .text(lang === 'es' ? 'BIOGRAFÍA' : 'BIOGRAPHY', 64, doc.y + 6, {
        characterSpacing: 3,
      })

    // Rule
    doc
      .moveTo(64, doc.y + 14)
      .lineTo(64 + W, doc.y + 14)
      .strokeColor('#dddddd')
      .lineWidth(0.5)
      .stroke()

    doc.moveDown(1.8)

    // ── Bio text ──────────────────────────────────────────────
    const paragraphs = htmlToPlainParagraphs(bioHtml)
    doc.font('Helvetica').fontSize(9.5).fillColor('#222222')

    paragraphs.forEach((para, i) => {
      doc.text(para, 64, doc.y, {
        width: W,
        lineGap: 3.5,
        paragraphGap: i < paragraphs.length - 1 ? 10 : 0,
      })
    })

    // ── Footer ────────────────────────────────────────────────
    const footerY = doc.page.height - 56
    doc
      .moveTo(64, footerY - 10)
      .lineTo(64 + W, footerY - 10)
      .strokeColor('#dddddd')
      .lineWidth(0.5)
      .stroke()

    const year = new Date().getFullYear()
    doc
      .font('Helvetica')
      .fontSize(7)
      .fillColor('#bbbbbb')
      .text(`julianperez.com  ·  © ${year} Julian Perez`, 64, footerY, {
        width: W,
        align: 'center',
        characterSpacing: 0.5,
      })

    doc.end()
  })
}

export const GET: APIRoute = async ({ url }) => {
  const lang = url.searchParams.get('lang') === 'es' ? 'es' : 'en'

  let bioHtml: string
  try {
    const bio = await getBio()
    bioHtml = bio?.content ?? (lang === 'es' ? STATIC_BIO_ES : STATIC_BIO_EN)
  } catch {
    bioHtml = lang === 'es' ? STATIC_BIO_ES : STATIC_BIO_EN
  }

  const buffer = await generatePdf(bioHtml, lang)

  return new Response(buffer, {
    headers: {
      'Content-Type': 'application/pdf',
      'Content-Disposition': `inline; filename="JulianPerez-Bio-${lang.toUpperCase()}.pdf"`,
      'Cache-Control': 'no-store',
    },
  })
}
