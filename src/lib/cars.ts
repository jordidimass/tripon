export type CarFuel = "Gas" | "Hybrid" | "Electric" | "Diesel"
export type CarTransmission = "Automatic" | "Manual"

export type Car = {
  id: string
  year: number
  make: string
  model: string
  trim: string
  body: "Sedan" | "SUV" | "Truck" | "Hatchback" | "Coupe" | "Wagon"
  price: number
  mileage: number
  fuel: CarFuel
  transmission: CarTransmission
  drivetrain: "FWD" | "RWD" | "AWD" | "4WD"
  color: string
  location: string
  vin: string
  mpg: string
  dealLabel: "Great" | "Fair" | "Hot"
  dealNote: string
  highlights: string[]
  estimatedFees: number
  image: string
}

const CARS: Car[] = [
  {
    id: "trp-001",
    year: 2022,
    make: "Tesla",
    model: "Model 3",
    trim: "Long Range",
    body: "Sedan",
    price: 32900,
    mileage: 22650,
    fuel: "Electric",
    transmission: "Automatic",
    drivetrain: "AWD",
    color: "Pearl White",
    location: "Austin, TX",
    vin: "5YJ3E1EA7NF000001",
    mpg: "130/120 MPGe",
    dealLabel: "Hot",
    dealNote: "Strong value for mileage",
    highlights: ["AWD", "Premium audio", "Heated seats"],
    estimatedFees: 1450,
    image: "/cars/tesla-model3.svg",
  },
  {
    id: "trp-002",
    year: 2021,
    make: "Toyota",
    model: "RAV4",
    trim: "XLE Hybrid",
    body: "SUV",
    price: 28900,
    mileage: 31800,
    fuel: "Hybrid",
    transmission: "Automatic",
    drivetrain: "AWD",
    color: "Magnetic Gray",
    location: "San Diego, CA",
    vin: "2T3RWRFV6MW000002",
    mpg: "41/38",
    dealLabel: "Great",
    dealNote: "Popular hybrid SUV",
    highlights: ["Hybrid", "Adaptive cruise", "Apple CarPlay"],
    estimatedFees: 1650,
    image: "/cars/toyota-rav4.svg",
  },
  {
    id: "trp-003",
    year: 2020,
    make: "Honda",
    model: "Civic",
    trim: "Sport",
    body: "Sedan",
    price: 19950,
    mileage: 40500,
    fuel: "Gas",
    transmission: "Automatic",
    drivetrain: "FWD",
    color: "Rallye Red",
    location: "Orlando, FL",
    vin: "19XFC2F80LE000003",
    mpg: "29/37",
    dealLabel: "Fair",
    dealNote: "Clean daily driver",
    highlights: ["Sport trim", "Lane keep", "Backup camera"],
    estimatedFees: 1290,
    image: "/cars/honda-civic.svg",
  },
  {
    id: "trp-004",
    year: 2019,
    make: "BMW",
    model: "X3",
    trim: "xDrive30i",
    body: "SUV",
    price: 27900,
    mileage: 51200,
    fuel: "Gas",
    transmission: "Automatic",
    drivetrain: "AWD",
    color: "Alpine White",
    location: "Denver, CO",
    vin: "5UXTR9C58KLF00004",
    mpg: "22/29",
    dealLabel: "Great",
    dealNote: "Strong spec for price",
    highlights: ["AWD", "Panoramic roof", "Driver assist"],
    estimatedFees: 1890,
    image: "/cars/bmw-x3.svg",
  },
  {
    id: "trp-005",
    year: 2023,
    make: "Mazda",
    model: "CX-5",
    trim: "Carbon Edition",
    body: "SUV",
    price: 31990,
    mileage: 9800,
    fuel: "Gas",
    transmission: "Automatic",
    drivetrain: "AWD",
    color: "Polymetal Gray",
    location: "Seattle, WA",
    vin: "JM3KFBCL0P0000005",
    mpg: "24/30",
    dealLabel: "Hot",
    dealNote: "Low miles, popular trim",
    highlights: ["AWD", "Bose audio", "Heated seats"],
    estimatedFees: 1725,
    image: "/cars/mazda-cx5.svg",
  },
  {
    id: "trp-006",
    year: 2018,
    make: "Ford",
    model: "F-150",
    trim: "XLT",
    body: "Truck",
    price: 25900,
    mileage: 68400,
    fuel: "Gas",
    transmission: "Automatic",
    drivetrain: "4WD",
    color: "Oxford White",
    location: "Nashville, TN",
    vin: "1FTEW1EP5JFA00006",
    mpg: "19/24",
    dealLabel: "Fair",
    dealNote: "Work-ready 4x4",
    highlights: ["4WD", "Tow package", "Crew cab"],
    estimatedFees: 2100,
    image: "/cars/ford-f150.svg",
  },
  {
    id: "trp-007",
    year: 2022,
    make: "Kia",
    model: "EV6",
    trim: "Wind",
    body: "SUV",
    price: 34900,
    mileage: 18400,
    fuel: "Electric",
    transmission: "Automatic",
    drivetrain: "RWD",
    color: "Steel Matte Gray",
    location: "Phoenix, AZ",
    vin: "KNDC3DLC8N0000007",
    mpg: "117/95 MPGe",
    dealLabel: "Great",
    dealNote: "Modern EV crossover",
    highlights: ["Fast charging", "Driver assist", "Heat pump"],
    estimatedFees: 1550,
    image: "/cars/kia-ev6.svg",
  },
  {
    id: "trp-008",
    year: 2017,
    make: "Volkswagen",
    model: "Golf",
    trim: "GTI SE",
    body: "Hatchback",
    price: 17900,
    mileage: 73500,
    fuel: "Gas",
    transmission: "Manual",
    drivetrain: "FWD",
    color: "Deep Black Pearl",
    location: "Chicago, IL",
    vin: "3VW447AU4HM000008",
    mpg: "24/32",
    dealLabel: "Great",
    dealNote: "Manual hot hatch",
    highlights: ["Manual", "Plaid seats", "Sport pack"],
    estimatedFees: 1195,
    image: "/cars/vw-gti.svg",
  },
  {
    id: "trp-009",
    year: 2020,
    make: "Audi",
    model: "A4",
    trim: "Premium Plus",
    body: "Sedan",
    price: 26800,
    mileage: 46800,
    fuel: "Gas",
    transmission: "Automatic",
    drivetrain: "AWD",
    color: "Daytona Gray",
    location: "Boston, MA",
    vin: "WAUENAF42LN000009",
    mpg: "24/31",
    dealLabel: "Fair",
    dealNote: "Quattro comfort",
    highlights: ["Quattro", "Virtual cockpit", "LED lights"],
    estimatedFees: 2050,
    image: "/cars/audi-a4.svg",
  },
  {
    id: "trp-010",
    year: 2024,
    make: "Mercedes",
    model: "GLC",
    trim: "300 4MATIC",
    body: "SUV",
    price: 49900,
    mileage: 4200,
    fuel: "Gas",
    transmission: "Automatic",
    drivetrain: "AWD",
    color: "Obsidian Black",
    location: "Los Angeles, CA",
    vin: "W1NKM4HB0RU000010",
    mpg: "20/28",
    dealLabel: "Hot",
    dealNote: "Nearly new",
    highlights: ["AWD", "Panoramic roof", "MBUX"],
    estimatedFees: 2980,
    image: "/cars/mercedes-glc.svg",
  },
  {
    id: "trp-011",
    year: 2019,
    make: "Toyota",
    model: "Camry",
    trim: "SE",
    body: "Sedan",
    price: 20900,
    mileage: 57750,
    fuel: "Gas",
    transmission: "Automatic",
    drivetrain: "FWD",
    color: "Silver",
    location: "Charlotte, NC",
    vin: "4T1B11HK5KU000011",
    mpg: "28/39",
    dealLabel: "Great",
    dealNote: "Reliable commuter",
    highlights: ["Apple CarPlay", "Safety Sense", "Sporty look"],
    estimatedFees: 1410,
    image: "/cars/toyota-camry.svg",
  },
  {
    id: "trp-012",
    year: 2021,
    make: "BMW",
    model: "330i",
    trim: "M Sport",
    body: "Sedan",
    price: 31800,
    mileage: 29200,
    fuel: "Gas",
    transmission: "Automatic",
    drivetrain: "RWD",
    color: "Portimao Blue",
    location: "New York, NY",
    vin: "3MW5R1J05M8P00012",
    mpg: "26/36",
    dealLabel: "Fair",
    dealNote: "Sport package",
    highlights: ["M Sport", "Adaptive suspension", "LED"],
    estimatedFees: 2250,
    image: "/cars/bmw-330i.svg",
  },
]

export function getCarById(id: string) {
  return CARS.find((c) => c.id === id)
}

export type CarListFilters = {
  q?: string
  make?: string
  fuel?: CarFuel
  transmission?: CarTransmission
  priceMin?: number
  priceMax?: number
  yearMin?: number
  onlyDeals?: boolean
}

export function listCars(filters: CarListFilters = {}) {
  const q = (filters.q ?? "").trim().toLowerCase()

  return CARS.filter((c) => {
    if (filters.make && c.make !== filters.make) return false
    if (filters.fuel && c.fuel !== filters.fuel) return false
    if (filters.transmission && c.transmission !== filters.transmission) return false
    if (typeof filters.priceMin === "number" && c.price < filters.priceMin) return false
    if (typeof filters.priceMax === "number" && c.price > filters.priceMax) return false
    if (typeof filters.yearMin === "number" && c.year < filters.yearMin) return false
    if (filters.onlyDeals && c.dealLabel !== "Hot" && c.dealLabel !== "Great") return false

    if (q) {
      const haystack = `${c.year} ${c.make} ${c.model} ${c.trim} ${c.body} ${c.fuel} ${c.transmission} ${c.drivetrain}`.toLowerCase()
      if (!haystack.includes(q)) return false
    }

    return true
  }).sort((a, b) => b.year - a.year || a.price - b.price)
}
