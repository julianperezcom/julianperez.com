// Chatbot script — ported from mockup.html

interface FlowStep {
  key: string;
  ask: string;
}

interface Option {
  label: string;
  action: () => void;
}

const BOOKING_FLOW: FlowStep[] = [
  { key: 'firstName',     ask: 'First name?' },
  { key: 'lastName',      ask: 'Last name?' },
  { key: 'email',         ask: 'Your email address?' },
  { key: 'company',       ask: 'Company / promoter name?' },
  { key: 'address',       ask: 'Full address?' },
  { key: 'eventName',     ask: 'Event name?' },
  { key: 'eventDate',     ask: 'Event date? (dd/mm/yyyy)' },
  { key: 'pastArtists',   ask: 'Past events / artists at your venue?' },
  { key: 'lineup',        ask: 'Planned line-up?' },
  { key: 'setTime',       ask: 'Set time?' },
  { key: 'offer',         ask: 'Offer?' },
  { key: 'eventLink',     ask: 'Link to the event page (if available)?' },
  { key: 'venueName',     ask: 'Venue name?' },
  { key: 'venueCapacity', ask: 'Venue capacity?' },
  { key: 'city',          ask: 'City?' },
  { key: 'country',       ask: 'Country?' },
  { key: 'venueAddress',  ask: 'Venue address?' },
  { key: 'website',       ask: 'Venue website?' },
  { key: 'airports',      ask: 'Nearest airports?' },
  { key: 'comments',      ask: 'Any additional comments?' },
];

const CONTACT_FLOW: FlowStep[] = [
  { key: 'firstName', ask: 'First name?' },
  { key: 'lastName',  ask: 'Last name?' },
  { key: 'email',     ask: 'Your email address?' },
  { key: 'subject',   ask: 'Subject?' },
  { key: 'message',   ask: 'Your message?' },
];

let chatOpen = false;
let chatMode: 'booking' | 'contact' | null = null;
let chatStep = 0;
let chatData: Record<string, string> = {};
let chatFlow: FlowStep[] = [];
let chatStarted = false;

function toggleChat(): void {
  chatOpen = !chatOpen;
  const win = document.getElementById('chatWindow');
  if (win) win.classList.toggle('open', chatOpen);
  if (chatOpen && !chatStarted) {
    chatStarted = true;
    chatInit();
  }
}

function addMsg(text: string, type: 'bot' | 'user'): void {
  const el = document.createElement('div');
  el.className = 'chat-msg ' + type;
  el.textContent = text;
  const msgs = document.getElementById('chatMessages');
  if (msgs) msgs.appendChild(el);
  scrollChat();
}

function addOptions(opts: Option[]): void {
  const wrap = document.createElement('div');
  wrap.className = 'chat-options';
  wrap.id = 'chatOptions';
  opts.forEach(o => {
    const btn = document.createElement('button');
    btn.className = 'chat-option-btn';
    btn.textContent = o.label;
    btn.onclick = () => {
      wrap.remove();
      addMsg(o.label, 'user');
      o.action();
    };
    wrap.appendChild(btn);
  });
  const msgs = document.getElementById('chatMessages');
  if (msgs) msgs.appendChild(wrap);
  scrollChat();
}

function scrollChat(): void {
  const m = document.getElementById('chatMessages');
  if (m) m.scrollTop = m.scrollHeight;
}

function chatInit(): void {
  setTimeout(() => {
    addMsg("Hi! I'm the Julian Perez team assistant. How can I help you?", 'bot');
    setTimeout(() => {
      addOptions([
        { label: '📅 Booking Request', action: () => startFlow('booking') },
        { label: '✉️ General Contact',  action: () => startFlow('contact') },
      ]);
    }, 400);
  }, 300);
}

function startFlow(mode: 'booking' | 'contact'): void {
  chatMode = mode;
  chatFlow = mode === 'booking' ? BOOKING_FLOW : CONTACT_FLOW;
  chatStep = 0;
  chatData = {};
  const inputRow = document.getElementById('chatInputRow');
  if (inputRow) inputRow.style.display = 'flex';
  setTimeout(() => {
    const intro = mode === 'booking'
      ? "Great! I'll collect the booking details. Let's go step by step."
      : "Sure! I'll pass your message to the team. Just a few details.";
    addMsg(intro, 'bot');
    setTimeout(() => askStep(), 500);
  }, 200);
}

function askStep(): void {
  if (chatStep < chatFlow.length) {
    addMsg(chatFlow[chatStep].ask, 'bot');
    const input = document.getElementById('chatInput') as HTMLInputElement | null;
    if (input) input.focus();
  } else {
    finishChat();
  }
}

function chatSend(): void {
  const input = document.getElementById('chatInput') as HTMLInputElement | null;
  if (!input) return;
  const val = input.value.trim();
  if (!val) return;
  input.value = '';
  addMsg(val, 'user');
  chatData[chatFlow[chatStep].key] = val;
  chatStep++;
  setTimeout(askStep, 350);
}

function finishChat(): void {
  const inputRow = document.getElementById('chatInputRow');
  if (inputRow) inputRow.style.display = 'none';

  // Populate and submit the real form in the background
  const formId = chatMode === 'booking' ? 'form-booking' : 'form-contact';
  const form = document.getElementById(formId) as HTMLFormElement | null;
  if (form) {
    const keyMap: Record<string, string> = chatMode === 'booking' ? {
      firstName: 'first_name', lastName: 'last_name', email: 'email',
      company: 'company', address: 'address', eventName: 'event_name',
      eventDate: 'event_date', pastArtists: 'past_events', lineup: 'lineup',
      setTime: 'set_time', offer: 'offer', eventLink: 'event_link',
      venueName: 'venue_name', venueCapacity: 'venue_capacity', city: 'city',
      country: 'country', venueAddress: 'venue_address', website: 'venue_website',
      airports: 'airports', comments: 'comments',
    } : {
      firstName: 'first_name', lastName: 'last_name', email: 'email',
      subject: 'subject_line', message: 'message',
    };
    Object.entries(chatData).forEach(([key, value]) => {
      const fieldName = keyMap[key];
      if (fieldName) {
        const input = form.querySelector(`[name="${fieldName}"]`) as HTMLInputElement | null;
        if (input) input.value = value;
      }
    });
    fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      body: new FormData(form),
    }).catch(() => {});
  }

  setTimeout(() => {
    addMsg(
      'Perfect! Your request has been submitted. The team will get back to you within 48h. Thank you!',
      'bot'
    );
    setTimeout(() => {
      addOptions([
        {
          label: '↩ Start over',
          action: () => {
            chatMode = null;
            chatStep = 0;
            chatInit();
          },
        },
      ]);
    }, 600);
  }, 300);
}

export function initChatbot(): void {
  const trigger = document.getElementById('chatTrigger');
  const closeBtn = document.getElementById('chatClose');
  const sendBtn = document.getElementById('chatSendBtn');
  const input = document.getElementById('chatInput') as HTMLInputElement | null;

  if (trigger) trigger.addEventListener('click', toggleChat);
  if (closeBtn) closeBtn.addEventListener('click', toggleChat);
  if (sendBtn) sendBtn.addEventListener('click', chatSend);
  if (input) {
    input.addEventListener('keydown', (e: KeyboardEvent) => {
      if (e.key === 'Enter') chatSend();
    });
  }
}
