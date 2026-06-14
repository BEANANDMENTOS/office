const statusMeta = {
  working: { label: "working", color: "var(--work)" },
  rest: { label: "rest", color: "var(--rest)" },
  free: { label: "free", color: "var(--free)" },
};

const rooms = [
  {
    id: "work",
    className: "work",
    title: "ห้องทำงาน",
    subtitle: "10 assigned desks",
  },
  {
    id: "lounge",
    className: "lounge",
    title: "ห้องนั่งเล่น",
    subtitle: "rest / free zone",
  },
];

const sceneObjects = [
  { id: "work-window", room: "work", type: "window", x: 74, y: 12, w: 28, h: 10 },
  { id: "work-board", room: "work", type: "board", x: 27, y: 13, w: 28, h: 9 },
  { id: "desk-ada", room: "work", type: "desk", x: 27, y: 28, w: 33, h: 7.5, desk: "#8f6042", screen: "#55a7ff", mark: "#ffc857" },
  { id: "desk-byte", room: "work", type: "desk", x: 73, y: 28, w: 33, h: 7.5, desk: "#73513e", screen: "#78e08f", mark: "#e85d75" },
  { id: "desk-coda", room: "work", type: "desk", x: 27, y: 40, w: 33, h: 7.5, desk: "#8b554c", screen: "#8be0ff", mark: "#b388ff" },
  { id: "desk-delta", room: "work", type: "desk", x: 73, y: 40, w: 33, h: 7.5, desk: "#7b6248", screen: "#ffc857", mark: "#55a7ff" },
  { id: "desk-echo", room: "work", type: "desk", x: 27, y: 52, w: 33, h: 7.5, desk: "#6f5245", screen: "#f3efd8", mark: "#78e08f" },
  { id: "desk-flux", room: "work", type: "desk", x: 73, y: 52, w: 33, h: 7.5, desk: "#8a5a3e", screen: "#ff8fab", mark: "#ffc857" },
  { id: "desk-glitch", room: "work", type: "desk", x: 27, y: 64, w: 33, h: 7.5, desk: "#7d5941", screen: "#55a7ff", mark: "#78e08f" },
  { id: "desk-halo", room: "work", type: "desk", x: 73, y: 64, w: 33, h: 7.5, desk: "#8d6a4b", screen: "#8be0ff", mark: "#e85d75" },
  { id: "desk-ion", room: "work", type: "desk", x: 27, y: 76, w: 33, h: 7.5, desk: "#78523c", screen: "#ffc857", mark: "#55a7ff" },
  { id: "desk-juno", room: "work", type: "desk", x: 73, y: 76, w: 33, h: 7.5, desk: "#865d49", screen: "#78e08f", mark: "#b388ff" },
  { id: "work-plant", room: "work", type: "plant", x: 10, y: 89, w: 10, h: 5.5 },
  { id: "work-shelf", room: "work", type: "shelf", x: 83, y: 89, w: 24, h: 5 },

  { id: "lounge-window", room: "lounge", type: "window", x: 30, y: 12, w: 36, h: 10 },
  { id: "lounge-shelf", room: "lounge", type: "shelf", x: 75, y: 18, w: 28, h: 5 },
  { id: "coffee", room: "lounge", type: "coffee-machine", x: 19, y: 31, w: 18, h: 12 },
  { id: "counter", room: "lounge", type: "counter", x: 47, y: 33, w: 25, h: 8 },
  { id: "plant-lounge-a", room: "lounge", type: "plant", x: 85, y: 35, w: 10, h: 5.5 },
  { id: "sofa", room: "lounge", type: "sofa", x: 51, y: 52, w: 56, h: 11 },
  { id: "rug", room: "lounge", type: "rug", x: 50, y: 66, w: 62, h: 10 },
  { id: "dining", room: "lounge", type: "dining-table", x: 51, y: 76, w: 46, h: 10 },
  { id: "lamp", room: "lounge", type: "lamp", x: 84, y: 63, w: 8, h: 16 },
  { id: "plant-lounge-b", room: "lounge", type: "plant", x: 14, y: 88, w: 10, h: 5.5 },
];

const agents = [
  {
    id: "ada",
    name: "Ada",
    status: "working",
    room: "work",
    x: 27,
    y: 24.5,
    outfit: { skin: "#f0b68c", hair: "#34231f", shirt: "#55a7ff", accent: "#f3efd8", pants: "#202744" },
    accessory: "glasses",
  },
  {
    id: "byte",
    name: "Byte",
    status: "working",
    room: "work",
    x: 73,
    y: 24.5,
    outfit: { skin: "#d99b72", hair: "#10131f", shirt: "#78e08f", accent: "#243f45", pants: "#352c43" },
    accessory: "visor",
  },
  {
    id: "coda",
    name: "Coda",
    status: "working",
    room: "work",
    x: 27,
    y: 36.5,
    outfit: { skin: "#c98d68", hair: "#7b3f5d", shirt: "#e85d75", accent: "#ffd166", pants: "#2e263a" },
    accessory: "bun",
  },
  {
    id: "delta",
    name: "Delta",
    status: "working",
    room: "work",
    x: 73,
    y: 36.5,
    outfit: { skin: "#f1c7a6", hair: "#d77b3f", shirt: "#8be0ff", accent: "#2a314a", pants: "#26354c" },
    accessory: "cap",
  },
  {
    id: "echo",
    name: "Echo",
    status: "working",
    room: "work",
    x: 27,
    y: 48.5,
    outfit: { skin: "#b87a5f", hair: "#202020", shirt: "#b388ff", accent: "#78e08f", pants: "#1d2a2f" },
    accessory: "headset",
  },
  {
    id: "flux",
    name: "Flux",
    status: "rest",
    room: "lounge",
    x: 34,
    y: 48,
    outfit: { skin: "#efc39f", hair: "#51413a", shirt: "#ffc857", accent: "#e85d75", pants: "#2b3248" },
    accessory: "glasses",
  },
  {
    id: "glitch",
    name: "Glitch",
    status: "free",
    room: "lounge",
    x: 18,
    y: 72,
    outfit: { skin: "#d7a07f", hair: "#39bda7", shirt: "#55a7ff", accent: "#ffc857", pants: "#35263b" },
    accessory: "visor",
  },
  {
    id: "halo",
    name: "Halo",
    status: "rest",
    room: "lounge",
    x: 64,
    y: 71,
    outfit: { skin: "#f1b690", hair: "#f0d15a", shirt: "#78e08f", accent: "#5d4e85", pants: "#243f45" },
    accessory: "cap",
  },
  {
    id: "ion",
    name: "Ion",
    status: "free",
    room: "lounge",
    x: 18,
    y: 27,
    outfit: { skin: "#a86f57", hair: "#0f0f17", shirt: "#f05d6a", accent: "#8be0ff", pants: "#22283d" },
    accessory: "headset",
  },
  {
    id: "juno",
    name: "Juno",
    status: "rest",
    room: "lounge",
    x: 77,
    y: 50,
    outfit: { skin: "#e0aa83", hair: "#5f3e2f", shirt: "#f3efd8", accent: "#55a7ff", pants: "#3d2d4f" },
    accessory: "bun",
  },
];

const roomsMount = document.querySelector("#rooms");
const rosterMount = document.querySelector("#roster");
const summaryMount = document.querySelector("#summary");
const lastUpdatedMount = document.querySelector("#lastUpdated");

function styleVars(values) {
  return Object.entries(values)
    .map(([key, value]) => `--${key}: ${typeof value === "number" ? `${value}%` : value}`)
    .join("; ");
}

function renderObject(item) {
  const node = document.createElement("div");
  node.className = `object ${item.type}`;
  node.setAttribute("aria-label", item.id);
  node.style.cssText = styleVars({
    x: item.x,
    y: item.y,
    w: item.w,
    h: item.h,
    desk: item.desk || "#8a5a3e",
    screen: item.screen || "#55a7ff",
    mark: item.mark || "#ffc857",
  });

  if (item.type === "desk") {
    const mark = document.createElement("span");
    mark.className = "desk-mark";
    node.append(mark);
  }

  return node;
}

function renderAgent(agent) {
  const status = statusMeta[agent.status];
  const node = document.createElement("article");
  node.className = `agent ${agent.status} ${agent.accessory}`;
  node.setAttribute("aria-label", `${agent.name} ${status.label}`);
  node.style.cssText = styleVars({
    x: agent.x,
    y: agent.y,
    "status-color": status.color,
    skin: agent.outfit.skin,
    hair: agent.outfit.hair,
    shirt: agent.outfit.shirt,
    accent: agent.outfit.accent,
    pants: agent.outfit.pants,
  });

  node.innerHTML = `
    <div class="agent-sprite" aria-hidden="true">
      <span class="hair"></span>
      <span class="head"></span>
      <span class="face"></span>
      <span class="body"></span>
      <span class="legs"></span>
      <span class="accessory"></span>
    </div>
    <span class="agent-tag">
      <span>${agent.name}</span>
      <span class="mini-status">${status.label}</span>
    </span>
  `;

  return node;
}

function renderRooms() {
  roomsMount.innerHTML = "";

  for (const room of rooms) {
    const roomNode = document.createElement("section");
    roomNode.className = `room ${room.className}`;
    roomNode.setAttribute("aria-labelledby", `${room.id}-title`);

    const title = document.createElement("div");
    title.className = "room-title";
    title.innerHTML = `<strong id="${room.id}-title">${room.title}</strong><span>${room.subtitle}</span>`;

    const decorLayer = document.createElement("div");
    decorLayer.className = "decor-layer";

    const objectLayer = document.createElement("div");
    objectLayer.className = "object-layer";

    const agentLayer = document.createElement("div");
    agentLayer.className = "agent-layer";

    sceneObjects
      .filter((item) => item.room === room.id)
      .forEach((item) => objectLayer.append(renderObject(item)));

    agents
      .filter((agent) => agent.room === room.id)
      .forEach((agent) => agentLayer.append(renderAgent(agent)));

    roomNode.append(title, decorLayer, objectLayer, agentLayer);
    roomsMount.append(roomNode);
  }
}

function renderRoster() {
  rosterMount.innerHTML = "";

  for (const agent of agents) {
    const status = statusMeta[agent.status];
    const card = document.createElement("article");
    card.className = "roster-card";
    card.style.cssText = styleVars({
      "status-color": status.color,
      skin: agent.outfit.skin,
      hair: agent.outfit.hair,
    });

    card.innerHTML = `
      <span class="portrait" aria-hidden="true"></span>
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

  const now = new Date();
  lastUpdatedMount.textContent = now.toLocaleTimeString("th-TH", {
    hour: "2-digit",
    minute: "2-digit",
  });
}

renderRooms();
renderRoster();
renderSummary();
