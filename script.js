const statusMeta = {
  working: { label: "working", color: "var(--work)" },
  rest: { label: "rest", color: "var(--rest)" },
  free: { label: "free", color: "var(--free)" },
};

const rooms = [
  {
    id: "work",
    title: "Work Room",
    subtitle: "10 assigned desks",
  },
  {
    id: "lounge",
    title: "Lounge Room",
    subtitle: "rest / free zone",
  },
];

const agents = [
  {
    id: "kai",
    name: "Kai",
    status: "working",
    room: "work",
    x: 28,
    y: 25.4,
    w: 14,
    skin: "#f1bd8f",
    hair: "#17151a",
    shirt: "#2e8bd7",
    accent: "#6fd6ff",
    pants: "#20263c",
    accessory: "tie",
  },
  {
    id: "luna",
    name: "Luna",
    status: "working",
    room: "work",
    x: 70,
    y: 25.4,
    w: 14,
    skin: "#f4b58c",
    hair: "#6d3fbb",
    shirt: "#8b5ee8",
    accent: "#ff8fd5",
    pants: "#252b46",
    accessory: "headset",
  },
  {
    id: "neo",
    name: "Neo",
    status: "working",
    room: "work",
    x: 28,
    y: 39.4,
    w: 14,
    skin: "#e3a77c",
    hair: "#2bb65f",
    shirt: "#2e9b67",
    accent: "#9cff86",
    pants: "#203732",
    accessory: "glasses",
  },
  {
    id: "ava",
    name: "Ava",
    status: "working",
    room: "work",
    x: 70,
    y: 39.4,
    w: 14,
    skin: "#e8ae86",
    hair: "#2458c8",
    shirt: "#287fd3",
    accent: "#77d4ff",
    pants: "#1e2c4b",
    accessory: "none",
  },
  {
    id: "brick",
    name: "Brick",
    status: "working",
    room: "work",
    x: 28,
    y: 53.4,
    w: 14,
    skin: "#edb083",
    hair: "#c45a25",
    shirt: "#e17b31",
    accent: "#ffc45a",
    pants: "#33243a",
    accessory: "headset",
  },
  {
    id: "pixel",
    name: "Pixel",
    status: "working",
    room: "work",
    x: 70,
    y: 53.4,
    w: 14,
    skin: "#d99a77",
    hair: "#5a2f26",
    shirt: "#854bb7",
    accent: "#f19bff",
    pants: "#28213a",
    accessory: "glasses",
  },
  {
    id: "mimi",
    name: "Mimi",
    status: "rest",
    room: "lounge",
    x: 24,
    y: 68,
    w: 15,
    skin: "#f2b789",
    hair: "#f0c557",
    shirt: "#ff7eb6",
    accent: "#ffd6f0",
    pants: "#33233e",
    accessory: "headset",
  },
  {
    id: "orion",
    name: "Orion",
    status: "rest",
    room: "lounge",
    x: 42,
    y: 45,
    w: 18,
    skin: "#f1c19b",
    hair: "#dfe8f2",
    shirt: "#e6b43a",
    accent: "#fff2a8",
    pants: "#30313d",
    accessory: "sleep",
    pose: "sleep",
  },
  {
    id: "zed",
    name: "Zed",
    status: "free",
    room: "lounge",
    x: 74,
    y: 25,
    w: 14,
    skin: "#dca27e",
    hair: "#2aae55",
    shirt: "#2386c7",
    accent: "#91e886",
    pants: "#26334c",
    accessory: "glasses",
  },
  {
    id: "tess",
    name: "Tess",
    status: "rest",
    room: "lounge",
    x: 70,
    y: 58,
    w: 14,
    skin: "#d69a72",
    hair: "#5b3a2c",
    shirt: "#7e46b6",
    accent: "#ffb6ec",
    pants: "#241f34",
    accessory: "glasses",
  },
];

const deskPositions = [
  ["kai", 28, 29],
  ["luna", 70, 29],
  ["neo", 28, 43],
  ["ava", 70, 43],
  ["brick", 28, 57],
  ["pixel", 70, 57],
  ["mimi", 28, 71],
  ["orion", 70, 71],
  ["zed", 28, 85],
  ["tess", 70, 85],
];

const sceneObjects = [
  { id: "work-window", room: "work", type: "window", x: 18, y: 11, w: 30, z: 1 },
  { id: "work-screen", room: "work", type: "screen", x: 56, y: 12, w: 34, z: 1 },
  { id: "work-board", room: "work", type: "board", x: 81, y: 13, w: 24, z: 1 },
  { id: "work-shelf", room: "work", type: "shelf", x: 20, y: 18, w: 26, z: 2 },
  { id: "work-plant-a", room: "work", type: "plant", x: 89, y: 34, w: 11, z: 5 },
  { id: "work-plant-b", room: "work", type: "plant", x: 91, y: 78, w: 12, z: 6 },
  { id: "work-plant-c", room: "work", type: "plant", x: 10, y: 73, w: 11, z: 6 },
  ...deskPositions.map(([agentId, x, y], index) => ({
    id: `desk-${agentId}`,
    room: "work",
    type: "desk",
    x,
    y,
    w: 34,
    z: 3,
    label: `${index + 1}. ${agents.find((agent) => agent.id === agentId).name}`,
    accent: agents.find((agent) => agent.id === agentId).accent,
  })),

  { id: "lounge-shelf", room: "lounge", type: "shelf", x: 24, y: 19, w: 26, z: 2 },
  { id: "coffee", room: "lounge", type: "coffee", x: 44, y: 25, w: 24, z: 3 },
  { id: "lounge-window", room: "lounge", type: "picture", x: 73, y: 15, w: 26, z: 1 },
  { id: "lounge-plant-a", room: "lounge", type: "plant", x: 87, y: 28, w: 12, z: 4 },
  { id: "lounge-sofa", room: "lounge", type: "sofa", x: 48, y: 43, w: 62, z: 3 },
  { id: "lounge-lamp", room: "lounge", type: "lamp", x: 83, y: 49, w: 11, z: 4 },
  { id: "lounge-rug", room: "lounge", type: "rug", x: 51, y: 72, w: 70, z: 1 },
  { id: "lounge-table", room: "lounge", type: "table", x: 52, y: 62, w: 55, z: 3 },
  { id: "lounge-side", room: "lounge", type: "sideTable", x: 25, y: 82, w: 33, z: 3 },
  { id: "lounge-plant-b", room: "lounge", type: "plant", x: 16, y: 52, w: 11, z: 4 },
  { id: "lounge-plant-c", room: "lounge", type: "plant", x: 86, y: 79, w: 12, z: 5 },
];

const roomsMount = document.querySelector("#rooms");
const rosterMount = document.querySelector("#roster");
const summaryMount = document.querySelector("#summary");
const lastUpdatedMount = document.querySelector("#lastUpdated");

function roomBackground(roomId) {
  const isWork = roomId === "work";
  const wall = isWork ? "#1f4c3e" : "#5a281d";
  const wall2 = isWork ? "#17392f" : "#3e1c17";
  const floor = isWork ? "#835a39" : "#6d452d";
  const floor2 = isWork ? "#62402b" : "#533420";

  return `
    <svg viewBox="0 0 900 1600" preserveAspectRatio="none" aria-hidden="true">
      <defs>
        <pattern id="${roomId}-wall-lines" width="34" height="34" patternUnits="userSpaceOnUse">
          <path d="M34 0H0V34" fill="none" stroke="rgba(255,255,255,.07)" stroke-width="2"/>
        </pattern>
        <pattern id="${roomId}-floor" width="72" height="42" patternUnits="userSpaceOnUse">
          <rect width="72" height="42" fill="${floor}"/>
          <path d="M0 0H72M0 21H72M36 0V21M18 21V42M54 21V42" stroke="${floor2}" stroke-width="5"/>
          <path d="M4 4H28M40 25H67" stroke="rgba(255,255,255,.07)" stroke-width="3"/>
        </pattern>
      </defs>
      <rect width="900" height="700" fill="${wall}"/>
      <rect width="900" height="700" fill="url(#${roomId}-wall-lines)" opacity=".95"/>
      ${isWork ? "" : `<g opacity=".38" stroke="${wall2}" stroke-width="7">${Array.from({ length: 12 }, (_, i) => `<path d="M0 ${74 + i * 50}H900"/><path d="M${(i % 2) * 45} ${58 + i * 50}v50"/>`).join("")}</g>`}
      <path d="M0 650H900V1600H0Z" fill="url(#${roomId}-floor)"/>
      <path d="M0 650H900" stroke="#201510" stroke-width="12"/>
      <rect x="0" y="0" width="900" height="1600" fill="none" stroke="#0a0707" stroke-width="18"/>
      <rect x="20" y="20" width="860" height="1560" fill="none" stroke="rgba(255,255,255,.08)" stroke-width="8"/>
    </svg>
  `;
}

function objectSvg(item) {
  const accent = item.accent || "#55c6ff";
  const templates = {
    desk: `
      <svg viewBox="0 0 260 150" aria-hidden="true">
        <rect x="26" y="54" width="208" height="66" fill="#8b5634" stroke="#160b08" stroke-width="8"/>
        <rect x="26" y="112" width="208" height="26" fill="#50301f" stroke="#160b08" stroke-width="7"/>
        <rect x="43" y="72" width="45" height="27" fill="#5f3926" stroke="#1b0d09" stroke-width="5"/>
        <rect x="172" y="72" width="45" height="27" fill="#5f3926" stroke="#1b0d09" stroke-width="5"/>
        <rect x="91" y="14" width="78" height="55" rx="5" fill="#101722" stroke="#08090d" stroke-width="8"/>
        <rect x="107" y="28" width="46" height="24" fill="${accent}" stroke="#05070c" stroke-width="4"/>
        <rect x="112" y="72" width="36" height="10" fill="#151a22"/>
        <rect x="102" y="85" width="56" height="9" fill="#0a0d13"/>
        <rect x="49" y="42" width="24" height="28" fill="#5fc3ff" stroke="#05070c" stroke-width="5"/>
        <rect x="185" y="40" width="22" height="18" fill="#f0c04a" stroke="#05070c" stroke-width="5"/>
      </svg>
    `,
    window: `
      <svg viewBox="0 0 300 170" aria-hidden="true">
        <rect x="22" y="18" width="256" height="132" fill="#79d7ff" stroke="#08101a" stroke-width="12"/>
        <path d="M150 20V150M23 84H278" stroke="#12233c" stroke-width="9"/>
        <path d="M44 42L92 18M174 42L222 18" stroke="#d8fbff" stroke-width="8" opacity=".7"/>
        <rect x="13" y="151" width="274" height="12" fill="#2b1b13"/>
      </svg>
    `,
    screen: `
      <svg viewBox="0 0 340 190" aria-hidden="true">
        <rect x="18" y="22" width="304" height="134" fill="#111926" stroke="#07090e" stroke-width="12"/>
        <path d="M48 52H160M48 76H138M48 100H178" stroke="#41b8ff" stroke-width="8"/>
        <rect x="210" y="50" width="58" height="58" fill="#6b56c8"/>
        <path d="M239 50A58 58 0 0 1 268 108H239Z" fill="#f1b44c"/>
        <rect x="112" y="162" width="116" height="12" fill="#2b1b13"/>
      </svg>
    `,
    board: `
      <svg viewBox="0 0 280 160" aria-hidden="true">
        <rect x="18" y="18" width="244" height="124" fill="#d9d2bf" stroke="#201811" stroke-width="10"/>
        <path d="M52 52h42M52 79h72M158 50l26 20 35-40" fill="none" stroke="#3c79b7" stroke-width="8"/>
        <circle cx="190" cy="97" r="21" fill="none" stroke="#697383" stroke-width="7"/>
        <path d="M190 72v-20M190 143v-20M165 97h-20M235 97h-20" stroke="#697383" stroke-width="6"/>
      </svg>
    `,
    shelf: `
      <svg viewBox="0 0 220 250" aria-hidden="true">
        <rect x="28" y="20" width="164" height="204" fill="#6d3f24" stroke="#150c08" stroke-width="9"/>
        <path d="M34 82h152M34 145h152" stroke="#251209" stroke-width="8"/>
        <rect x="48" y="46" width="22" height="33" fill="#4db9ff"/>
        <rect x="77" y="38" width="23" height="41" fill="#f0c04a"/>
        <rect x="110" y="48" width="50" height="24" fill="#6ad96f"/>
        <rect x="52" y="107" width="46" height="29" fill="#e56e56"/>
        <rect x="112" y="100" width="20" height="38" fill="#77d4ff"/>
        <rect x="139" y="98" width="28" height="40" fill="#b779d9"/>
        <rect x="54" y="163" width="110" height="42" fill="#2f704d"/>
      </svg>
    `,
    plant: `
      <svg viewBox="0 0 120 180" aria-hidden="true">
        <path d="M60 98C50 68 20 66 16 38c28 4 38 21 44 42 7-29 25-47 54-55-1 31-24 43-43 66 23-16 42-12 51 5-22 12-39 13-62 2Z" fill="#3ecb62" stroke="#0b3318" stroke-width="8"/>
        <rect x="34" y="103" width="52" height="58" fill="#7a4a2e" stroke="#170b07" stroke-width="8"/>
        <rect x="27" y="95" width="66" height="24" fill="#9e6940" stroke="#170b07" stroke-width="7"/>
      </svg>
    `,
    coffee: `
      <svg viewBox="0 0 240 330" aria-hidden="true">
        <rect x="42" y="22" width="156" height="48" fill="#141821" stroke="#07090d" stroke-width="9"/>
        <text x="120" y="55" fill="#f3b444" font-size="28" font-family="monospace" font-weight="900" text-anchor="middle">COFFEE</text>
        <rect x="58" y="70" width="124" height="150" fill="#2f3746" stroke="#07090d" stroke-width="10"/>
        <rect x="82" y="94" width="76" height="32" fill="#8ff0a4" stroke="#07090d" stroke-width="6"/>
        <circle cx="92" cy="154" r="15" fill="#f3efe0" stroke="#07090d" stroke-width="5"/>
        <circle cx="147" cy="154" r="15" fill="#f3b444" stroke="#07090d" stroke-width="5"/>
        <rect x="92" y="182" width="56" height="38" fill="#24130d" stroke="#07090d" stroke-width="6"/>
        <rect x="32" y="221" width="176" height="78" fill="#6d3f24" stroke="#150c08" stroke-width="9"/>
      </svg>
    `,
    sofa: `
      <svg viewBox="0 0 520 220" aria-hidden="true">
        <rect x="42" y="58" width="436" height="116" rx="24" fill="#23875f" stroke="#07130d" stroke-width="12"/>
        <rect x="64" y="28" width="392" height="82" rx="22" fill="#2f9d72" stroke="#07130d" stroke-width="10"/>
        <path d="M180 38v126M338 38v126" stroke="#156246" stroke-width="8"/>
        <rect x="350" y="74" width="86" height="70" rx="8" fill="#e3b542" stroke="#07130d" stroke-width="8"/>
        <rect x="34" y="154" width="52" height="44" fill="#144532" stroke="#07130d" stroke-width="8"/>
        <rect x="434" y="154" width="52" height="44" fill="#144532" stroke="#07130d" stroke-width="8"/>
      </svg>
    `,
    table: `
      <svg viewBox="0 0 430 220" aria-hidden="true">
        <rect x="50" y="54" width="330" height="104" rx="10" fill="#9b6036" stroke="#180c07" stroke-width="10"/>
        <rect x="88" y="154" width="28" height="48" fill="#4f2d1b" stroke="#180c07" stroke-width="6"/>
        <rect x="314" y="154" width="28" height="48" fill="#4f2d1b" stroke="#180c07" stroke-width="6"/>
        <circle cx="210" cy="105" r="26" fill="#2e9d5c" stroke="#180c07" stroke-width="7"/>
        <rect x="98" y="88" width="45" height="14" fill="#f4ecd4" stroke="#180c07" stroke-width="5"/>
        <rect x="286" y="88" width="35" height="28" fill="#d8a052" stroke="#180c07" stroke-width="5"/>
      </svg>
    `,
    rug: `
      <svg viewBox="0 0 560 230" aria-hidden="true">
        <ellipse cx="280" cy="114" rx="248" ry="86" fill="#60415f" stroke="#1b101c" stroke-width="12"/>
        <ellipse cx="280" cy="114" rx="198" ry="58" fill="#315f4a" stroke="#b9864f" stroke-width="8"/>
      </svg>
    `,
    lamp: `
      <svg viewBox="0 0 110 250" aria-hidden="true">
        <rect x="49" y="82" width="12" height="122" fill="#6b4529" stroke="#150c08" stroke-width="5"/>
        <path d="M22 28h66l14 62H8Z" fill="#f5c85a" stroke="#150c08" stroke-width="8"/>
        <rect x="26" y="200" width="58" height="24" fill="#6b4529" stroke="#150c08" stroke-width="6"/>
      </svg>
    `,
    picture: `
      <svg viewBox="0 0 280 190" aria-hidden="true">
        <rect x="22" y="20" width="236" height="144" fill="#2f254f" stroke="#170c08" stroke-width="11"/>
        <path d="M42 122l52-45 35 30 48-58 57 73Z" fill="#c45e3e"/>
        <rect x="44" y="42" width="188" height="96" fill="#7456a6" opacity=".55"/>
        <rect x="18" y="166" width="244" height="10" fill="#7a4a2e"/>
      </svg>
    `,
    sideTable: `
      <svg viewBox="0 0 260 160" aria-hidden="true">
        <rect x="40" y="56" width="180" height="72" fill="#8a5635" stroke="#160b08" stroke-width="9"/>
        <rect x="82" y="128" width="28" height="28" fill="#4d2d1e"/>
        <rect x="150" y="128" width="28" height="28" fill="#4d2d1e"/>
        <rect x="86" y="34" width="44" height="24" fill="#f4ecd4" stroke="#160b08" stroke-width="5"/>
        <rect x="152" y="31" width="38" height="32" fill="#6ad96f" stroke="#160b08" stroke-width="5"/>
      </svg>
    `,
  };

  return templates[item.type] || "";
}

function agentSvg(agent, compact = false) {
  const eyeY = compact ? 52 : 46;
  const bodyY = compact ? 78 : 82;
  const sleep = agent.pose === "sleep";

  return `
    <svg viewBox="0 0 140 190" aria-hidden="true">
      <g transform="${sleep ? "rotate(88 70 94) translate(4 -4)" : ""}">
        <rect x="45" y="118" width="20" height="56" fill="${agent.pants}" stroke="#07090d" stroke-width="7"/>
        <rect x="75" y="118" width="20" height="56" fill="${agent.pants}" stroke="#07090d" stroke-width="7"/>
        <rect x="34" y="${bodyY}" width="72" height="58" rx="12" fill="${agent.shirt}" stroke="#07090d" stroke-width="8"/>
        <rect x="52" y="${bodyY + 12}" width="36" height="18" fill="${agent.accent}" opacity=".8"/>
        <rect x="23" y="${bodyY + 6}" width="22" height="54" rx="10" fill="${agent.skin}" stroke="#07090d" stroke-width="7"/>
        <rect x="95" y="${bodyY + 6}" width="22" height="54" rx="10" fill="${agent.skin}" stroke="#07090d" stroke-width="7"/>
        <rect x="36" y="28" width="68" height="66" rx="18" fill="${agent.skin}" stroke="#07090d" stroke-width="8"/>
        <path d="M35 44c8-24 29-34 51-27 17 5 26 18 23 39-18-14-44-14-74-12Z" fill="${agent.hair}" stroke="#07090d" stroke-width="8"/>
        <rect x="52" y="${eyeY}" width="8" height="8" fill="#07090d"/>
        <rect x="81" y="${eyeY}" width="8" height="8" fill="#07090d"/>
        <rect x="61" y="71" width="20" height="5" fill="#7b3e37"/>
        ${agent.accessory === "glasses" ? `<rect x="47" y="${eyeY - 5}" width="20" height="17" fill="none" stroke="#07090d" stroke-width="5"/><rect x="75" y="${eyeY - 5}" width="20" height="17" fill="none" stroke="#07090d" stroke-width="5"/><path d="M67 ${eyeY + 2}h8" stroke="#07090d" stroke-width="5"/>` : ""}
        ${agent.accessory === "headset" ? `<path d="M30 60c0-32 80-32 80 0" fill="none" stroke="#2f3442" stroke-width="9"/><rect x="24" y="58" width="16" height="32" fill="#2f3442" stroke="#07090d" stroke-width="5"/><rect x="100" y="58" width="16" height="32" fill="#2f3442" stroke="#07090d" stroke-width="5"/>` : ""}
        ${agent.accessory === "sleep" ? `<path d="M98 20h22l-20 20h22l-22 22" fill="none" stroke="#f8efd8" stroke-width="7"/>` : ""}
        ${agent.accessory === "tie" ? `<path d="M67 91l12 0 7 32-13 12-13-12Z" fill="${agent.accent}" stroke="#07090d" stroke-width="5"/>` : ""}
      </g>
    </svg>
  `;
}

function createPositionedNode(className, item, html) {
  const node = document.createElement("div");
  node.className = className;
  node.style.setProperty("--x", `${item.x}%`);
  node.style.setProperty("--y", `${item.y}%`);
  node.style.setProperty("--w", `${item.w}%`);
  node.style.setProperty("--z", item.z || 1);
  node.innerHTML = html;
  return node;
}

function renderRooms() {
  roomsMount.innerHTML = "";

  for (const room of rooms) {
    const roomNode = document.createElement("article");
    roomNode.className = `room room-${room.id}`;
    roomNode.setAttribute("aria-label", room.title);

    const bg = document.createElement("div");
    bg.className = "room-bg";
    bg.innerHTML = roomBackground(room.id);

    const title = document.createElement("div");
    title.className = "room-title";
    title.innerHTML = `<strong>${room.title}</strong><span>${room.subtitle}</span>`;

    const objectLayer = document.createElement("div");
    objectLayer.className = "object-layer";

    const agentLayer = document.createElement("div");
    agentLayer.className = "agent-layer";

    for (const object of sceneObjects.filter((item) => item.room === room.id)) {
      const objectNode = createPositionedNode("scene-item scene-object", object, objectSvg(object));
      if (object.label) {
        const label = document.createElement("span");
        label.className = "desk-label";
        label.textContent = object.label;
        objectNode.append(label);
      }
      objectLayer.append(objectNode);
    }

    for (const agent of agents.filter((item) => item.room === room.id)) {
      const status = statusMeta[agent.status];
      const agentNode = createPositionedNode(
        `scene-item scene-agent ${agent.pose === "sleep" ? "agent-resting" : ""}`,
        { ...agent, z: 7 },
        agentSvg(agent),
      );
      agentNode.style.setProperty("--status-color", status.color);
      const label = document.createElement("span");
      label.className = "agent-label";
      label.innerHTML = `${agent.name}<br><span>${status.label}</span>`;
      agentNode.append(label);
      agentLayer.append(agentNode);
    }

    roomNode.append(bg, title, objectLayer, agentLayer);
    roomsMount.append(roomNode);
  }
}

function renderRoster() {
  rosterMount.innerHTML = "";

  for (const agent of agents) {
    const status = statusMeta[agent.status];
    const card = document.createElement("article");
    card.className = "roster-card";
    card.style.setProperty("--status-color", status.color);

    card.innerHTML = `
      <span class="portrait">${agentSvg(agent, true)}</span>
      <span class="roster-copy">
        <span class="roster-name">${agent.name}</span>
        <span class="roster-status"><i class="status-dot"></i>${status.label}</span>
      </span>
    `;
    rosterMount.append(card);
  }
}

function renderSummary() {
  const totals = agents.reduce(
    (acc, agent) => {
      acc[agent.status] += 1;
      return acc;
    },
    { working: 0, rest: 0, free: 0 },
  );

  summaryMount.innerHTML = Object.entries(totals)
    .map(([key, value]) => {
      const status = statusMeta[key];
      return `
        <span class="summary-chip" style="--status-color: ${status.color}">
          <i class="status-dot"></i>${status.label} ${value}
        </span>
      `;
    })
    .join("");

  lastUpdatedMount.textContent = new Date().toLocaleTimeString("th-TH", {
    hour: "2-digit",
    minute: "2-digit",
  });
}

renderRooms();
renderRoster();
renderSummary();
