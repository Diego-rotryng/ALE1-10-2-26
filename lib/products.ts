export interface Product {
  slug: string
  name: string
  subtitle: string
  price: number
  range: string
  maxSpeed: string
  power: string
  chargeTime: string
  heroVideo: string
  whatsappUrl: string
  image: string
  specs: {
    label: string
    rider: string
    riderPro: string
    riderProMax: string
    rebel: string
  }[]
}

export const WHATSAPP_URL = "https://wa.me/5491161937808"

export const products: Product[] = [
  {
    slug: "punk-rider",
    name: "Punk Rider",
    subtitle: "El Explorador Urbano",
    price: 1399,
    range: "60 km",
    maxSpeed: "40 km/h",
    power: "1300 W",
    chargeTime: "9 hrs",
    heroVideo: "https://storage.googleapis.com/msgsndr/AhLPEFX6foynvRbel1gk/media/680a923f4dd5ff0d3fb2d8b5.mp4",
    whatsappUrl: WHATSAPP_URL,
    specs: [],
  },
  {
    slug: "punk-rider-pro",
    name: "Punk Rider Pro",
    subtitle: "Crucero de Potencia",
    price: 1950,
    range: "75 km",
    maxSpeed: "50 km/h",
    power: "2300 W",
    chargeTime: "9 hrs",
    heroVideo: "https://storage.googleapis.com/msgsndr/AhLPEFX6foynvRbel1gk/media/680a923f4dd5ff0d3fb2d8b5.mp4",
    whatsappUrl: WHATSAPP_URL,
    specs: [],
  },
  {
    slug: "punk-rider-pro-max",
    name: "Punk Rider Pro Max",
    subtitle: "Potencia Extrema",
    price: 2350,
    range: "90 km",
    maxSpeed: "55 km/h",
    power: "2800 W",
    chargeTime: "10 hrs",
    heroVideo: "https://storage.googleapis.com/msgsndr/AhLPEFX6foynvRbel1gk/media/680a923f4dd5ff0d3fb2d8b5.mp4",
    whatsappUrl: WHATSAPP_URL,
    specs: [],
  },
  {
    slug: "punk-rebel",
    name: "Punk Rebel",
    subtitle: "Bestia del Futuro",
    price: 2700,
    range: "135 km",
    maxSpeed: "70 km/h",
    power: "3600 W",
    chargeTime: "19 hrs",
    heroVideo: "https://storage.googleapis.com/msgsndr/AhLPEFX6foynvRbel1gk/media/680a923f4dd5ff0d3fb2d8b5.mp4",
    whatsappUrl: WHATSAPP_URL,
    specs: [],
  },
]

export function getProductBySlug(slug: string): Product | undefined {
  return products.find((p) => p.slug === slug)
}

export const comparisonTable = {
  headers: ["", "Punk Rider", "Punk Rider Pro", "Punk Rider Pro Max", "Punk Rebel"],
  rows: [
    { label: "Precio", values: ["USD 1399", "USD 1950", "USD 2350", "USD 2700"] },
    { label: "Alcance Maximo", values: ["60 km", "75 km", "90 km", "135 km"] },
    { label: "Velocidad Maxima", values: ["40 km/h", "50 km/h", "55 km/h", "70 km/h"] },
    { label: "Potencia Maxima", values: ["1300 W", "2300 W", "2800 W", "3600 W"] },
    { label: "Tiempo de Carga", values: ["9 hrs", "9 hrs", "10 hrs", "19 hrs"] },
    { label: "Motor", values: ["Single 650W", "Dual 1150W", "Dual 1400W", "Dual 1800W"] },
    { label: "Bateria", values: ["48V 18.2Ah", "48V 21Ah", "60V 25Ah", "60V 35Ah"] },
    { label: "Peso", values: ["27 kg", "32 kg", "35 kg", "46 kg"] },
    { label: "Neumaticos", values: ['10"', '10"', '10"', '11"'] },
    { label: "Frenos", values: ["Tambor", "Disco", "Disco", "Disco Hidraulico"] },
    { label: "Suspension", values: ["Delantera", "Doble", "Doble", "Doble Ajustable"] },
    { label: "IP Rating", values: ["IP54", "IP55", "IP55", "IP55"] },
  ],
}

export const reviews = [
  {
    name: "Christian",
    rating: 5,
    title: "Hasta ahora todo genial.",
    text: "Esta moto realmente tiene la potencia que promete y se conduce con una suavidad increible. La iluminacion y el aspecto general son excelentes. Estoy mas que satisfecho con mi compra. La recomiendo tanto a pilotos experimentados como a principiantes. Cumple con todos los requisitos.",
  },
  {
    name: "Andy K",
    rating: 5,
    title: "Best bang for the buck",
    text: "The Punk Rider Pro has to be the best bang for the buck electric scooter out right now. The long list of premium features is a cut above every other scooter I've come across in the price range. Those side bar lights make you feel like you are on a scooter from the future.",
  },
  {
    name: "Jack J",
    rating: 5,
    title: "Acceleration is Insane",
    text: "Just got my hands on the Punk Rider, and it's a steal for the price. The large tires give a smooth ride, and the range ain't bad either. The acceleration is insane, and the build quality is solid.",
  },
  {
    name: "Elvee",
    rating: 5,
    title: "Blends Style & Performance",
    text: "Punk Rider effortlessly blends style and performance. With a sleek design and powerful motor, it zips through urban landscapes with ease. Efficient, stylish, and practical - a standout in the electric scooter market.",
  },
  {
    name: "Aaron D",
    rating: 5,
    title: "I really love this Scooter",
    text: "I was looking for something as a daily School commute for my Son but also something I could use. This is a great cross of all of these aspects. The regen braking is also great. Lastly I love that I can set speed and torque restrictions.",
  },
]

export const youtubeReviews = [
  { id: "gx6lXeQy2Cs", title: "Lights Galore! Punk Rider Pro First Impressions" },
  { id: "g-rUwZyJy8o", title: "Punk Rider Pro Review: Affordable Luxury or a Cheap Clone?" },
  { id: "WUHzbvh2go8", title: "PUNK RIDER PRO Review - COMPACT Most Impressive Electric Scooter" },
]
