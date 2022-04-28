const PRODUCTS_DATA = [
  {
    title: "burgers",
    items: [
      {
        id: 1,
        name: "beef burger",
        description: "",
        price: 2.9,
      },
      {
        id: 2,
        name: "chicken burger",
        description: "",
        price: 3,
      },
      {
        id: 3,
        name: "chicken fillet sandwich",
        description: "",
        price: 3.5,
      },
      {
        id: 4,
        name: "veggie burger",
        description: "",
        price: 2.8,
      },
      {
        id: 5,
        name: "halloumi burger",
        description: "",
        price: 2.8,
      },
      {
        id: 6,
        name: "chicken zinger burger",
        description: "",
        price: 3.1,
      },
    ],
  },
  {
    title: "chicken",
    items: [
      {
        id: 7,
        name: "roast chicken breast",
        description: "",
        price: 3.3,
      },
      {
        id: 8,
        name: "southern fried chicken",
        description: "",
        price: 1.7,
      },
      {
        id: 9,
        name: "chicken nuggets",
        description: "",
        price: 2.3,
      },
      {
        id: 10,
        name: "6 chicken wings",
        description: "",
        price: 3.3,
      },
      {
        id: 11,
        name: "6 chicken wings & chips",
        description: "",
        price: 3.8,
      },
      {
        id: 12,
        name: "southern fried chicken & chips",
        description: "",
        price: 3.3,
      },
      {
        id: 13,
        name: "southern fried chicken & doner meat",
        description: "",
        price: 4.5,
      },
      {
        id: 14,
        name: "golden nugget meal",
        description: "9 nuggets, chips & naan bread",
        price: 4,
      },
      {
        id: 15,
        name: "golden fillet sandwich meal",
        description: "chicken fillet burger, chips & can",
        price: 4.6,
      },
      {
        id: 16,
        name: "mini feast meal",
        description: "2 pieces of chicken, chips, beans & a can",
        price: 5,
      },
      {
        id: 17,
        name: "bargain box",
        description: "5 pieces of chicken, chips & a can",
        price: 7.1,
      },
    ],
  },
  {
    title: "chickencurry",
    items: [
      {
        id: 18,
        name: "chicken curry with chips",
        description: "",
        price: 3,
      },
      {
        id: 19,
        name: "chicken curry with rice",
        description: "",
        price: 3,
      },
      {
        id: 20,
        name: "chicken curry with chips & rice",
        description: "",
        price: 4,
      },
      {
        id: 21,
        name: "chicken curry with naan bread & chips",
        description: "",
        price: 5.1,
      },
      {
        id: 22,
        name: "chicken curry with naan bread & rice",
        description: "",
        price: 5,
      },
    ],
  },
  {
    title: "chips",
    items: [
      {
        id: 23,
        name: "cone of chips",
        description: "",
        price: 1.7,
      },
      {
        id: 24,
        name: "regular chips",
        description: "",
        price: 2.1,
      },
      {
        id: 25,
        name: "large chips",
        description: "",
        price: 3.3,
      },
      {
        id: 26,
        name: "chips & cheese",
        description: "",
        price: 3.3,
      },
      {
        id: 27,
        name: "cone of chips with sauce",
        description: "",
        price: 1.8,
      },
      {
        id: 28,
        name: "tray of chips with 1 condiment",
        description:
          "chips on a tray with an option of gravy / peas / curry / beans",
        price: 2.7,
      },
      {
        id: 29,
        name: "tray of chips with 2 condiments",
        description:
          "chips on a tray with an option of gravy / peas / curry / beans",
        price: 3.3,
      },
      {
        id: 30,
        name: "chips in pitta bread",
        description: "",
        price: 2.2,
      },
      {
        id: 31,
        name: "potato fritter",
        description: "",
        price: 0.6,
      },
      {
        id: 32,
        name: "potato wedge",
        description: "",
        price: 0.6,
      },
      {
        id: 33,
        name: "6 potato wedges",
        description: "",
        price: 2.5,
      },
      {
        id: 34,
        name: "french fries",
        description: "",
        price: 2.1,
      },
      {
        id: 35,
        name: "chips in pitta bread & salad",
        description: "",
        price: 4,
      },
      {
        id: 36,
        name: "chips in naan bread & salad",
        description: "",
        price: 5.4,
      },
      {
        id: 37,
        name: "chip bap",
        description: "",
        price: 2.2,
      },
    ],
  },
  {
    title: "drinks",
    items: [
      {
        id: 38,
        name: "cans ( drinks )",
        description: "",
        price: 1.1,
      },
      {
        id: 39,
        name: "ribena juice ( drinks )",
        description: "",
        price: 1.1,
      },
      {
        id: 40,
        name: "bottles ( drinks )",
        description: "",
        price: 2.1,
      },
      {
        id: 41,
        name: "bottled water ( drinks )",
        description: "",
        price: 0.8,
      },
    ],
  },
  {
    title: "extras",
    items: [
      {
        id: 42,
        name: "gravy",
        description: "",
        price: 1.2,
      },
      {
        id: 43,
        name: "mushy peas",
        description: "",
        price: 1.2,
      },
      {
        id: 44,
        name: "curry sauce",
        description: "",
        price: 1.2,
      },
      {
        id: 45,
        name: "baked beans",
        description: "",
        price: 1.2,
      },
      {
        id: 46,
        name: "tub of sauce",
        description: "",
        price: 0.7,
      },
      {
        id: 47,
        name: "tub of chicken curry",
        description: "",
        price: 1.3,
      },
      {
        id: 48,
        name: "bottle of vinegar",
        description: "",
        price: 1.4,
      },
      {
        id: 49,
        name: "bottle of ketchup",
        description: "",
        price: 1.4,
      },
      {
        id: 50,
        name: "tub of grated cheese",
        description: "",
        price: 1.3,
      },
      {
        id: 51,
        name: "pickled onion",
        description: "",
        price: 0.5,
      },
      {
        id: 52,
        name: "pickled egg",
        description: "",
        price: 0.6,
      },
      {
        id: 53,
        name: "toasted pitta bread",
        description: "",
        price: 0.6,
      },
      {
        id: 54,
        name: "toasted naan bread",
        description: "",
        price: 1.7,
      },
      {
        id: 55,
        name: "bap with butter",
        description: "",
        price: 0.6,
      },
    ],
  },
  {
    title: "fish",
    items: [
      {
        id: 56,
        name: "battered cod fish",
        description: "",
        price: 3.5,
      },
      {
        id: 57,
        name: "battered haddock fish",
        description: "",
        price: 3.5,
      },
      {
        id: 58,
        name: "breadcrumb cod fish",
        description: "",
        price: 3.6,
      },
      {
        id: 59,
        name: "breadcrumb haddock fish",
        description: "",
        price: 3.6,
      },
      {
        id: 60,
        name: "10 pieces of scampi",
        description: "",
        price: 3.2,
      },
      {
        id: 61,
        name: "fishcake",
        description: "",
        price: 1.65,
      },
      {
        id: 62,
        name: "tinned roe",
        description: "",
        price: 1.45,
      },
    ],
  },
  {
    title: "jacketpotato",
    items: [
      {
        id: 63,
        name: "jacket potato with butter & cheese",
        description: "",
        price: 2.5,
      },
      {
        id: 64,
        name: "jacket potato with butter, cheese & beans",
        description: "",
        price: 2.7,
      },
    ],
  },
  {
    title: "kebabs",
    items: [
      {
        id: 65,
        name: "doner kebab",
        description: "",
        price: 3.1,
      },
      {
        id: 66,
        name: "chicken kebab",
        description: "tikka or mediterranean",
        price: 3.3,
      },
      {
        id: 67,
        name: "mixed meats ( 2 meats ) kebab",
        description: "choice of doner, tikka or mediterranean",
        price: 3.4,
      },
      {
        id: 68,
        name: "mixed meats ( 3 meats ) kebab",
        description: "doner, tikka & mediterranean",
        price: 3.6,
      },
    ],
  },
  {
    title: "pies",
    items: [
      {
        id: 69,
        name: "meat & potato pie",
        description: "",
        price: 2.7,
      },
      {
        id: 70,
        name: "steak & kidney pie",
        description: "",
        price: 2.7,
      },
      {
        id: 71,
        name: "all steak pie",
        description: "",
        price: 2.7,
      },
      {
        id: 72,
        name: "chicken & mushroom pie",
        description: "",
        price: 2.7,
      },
      {
        id: 73,
        name: "cheese & onion pie",
        description: "",
        price: 2.7,
      },
      {
        id: 74,
        name: "all steak pudding",
        description: "",
        price: 2.3,
      },
      {
        id: 75,
        name: "steak & kidney pudding",
        description: "",
        price: 2.3,
      },
    ],
  },
  {
    title: "savouries",
    items: [
      {
        id: 76,
        name: "sausage",
        description: "",
        price: 1.2,
      },
      {
        id: 77,
        name: "battered sausage",
        description: "",
        price: 1.3,
      },
      {
        id: 78,
        name: "saveloy sausage",
        description: "",
        price: 1.65,
      },
      {
        id: 79,
        name: "sausage bap",
        description: "",
        price: 2,
      },
      {
        id: 80,
        name: "veggie spring roll",
        description: "",
        price: 2,
      },
      {
        id: 81,
        name: "12 onion rings",
        description: "",
        price: 2.1,
      },
      {
        id: 82,
        name: "mushy pea fritter",
        description: "",
        price: 1.4,
      },
      {
        id: 83,
        name: "plain burger",
        description: "",
        price: 1.8,
      },
      {
        id: 84,
        name: "battered burger",
        description: "",
        price: 1.6,
      },
      {
        id: 85,
        name: "5 halloumi sticks & small sauce",
        description: "",
        price: 5,
      },
      {
        id: 86,
        name: "1 halloumi stick",
        description: "",
        price: 0.85,
      },
      {
        id: 87,
        name: "battered mushrooms",
        description: "",
        price: 1.1,
      },
    ],
  },
  {
    title: "specials",
    items: [
      {
        id: 88,
        name: "mini fish & chips",
        description: "served with a choice of peas, beans, curry or gravy.",
        price: 4.9,
      },
      {
        id: 89,
        name: "small sausage & chips",
        description: "Served with a choice of peas, beans, curry or gravy.",
        price: 3.2,
      },
      {
        id: 90,
        name: "small fishcake & chips",
        description: "Served with a choice of peas, beans, curry or gravy.",
        price: 3.2,
      },
      {
        id: 91,
        name: "small sausage, chips & fishcake",
        description: "Served with a choice of peas, beans, curry or gravy.",
        price: 3.7,
      },
      {
        id: 92,
        name: "any pie & chips",
        description: "Served with a choice of peas, beans, curry or gravy.",
        price: 4.9,
      },
      {
        id: 93,
        name: "any pudding & chips",
        description: "Served with a choice of peas, beans, curry or gravy.",
        price: 4.9,
      },
      {
        id: 94,
        name: "mega snack box",
        description:
          "chips, 5 onion rings, 5 nuggets, 5 wings & any tub of sauce",
        price: 5.8,
      },
      {
        id: 95,
        name: "single burger & chips",
        description: "",
        price: 3.6,
      },
      {
        id: 96,
        name: "double burger & chips",
        description: "",
        price: 4.1,
      },
      {
        id: 97,
        name: "chicken burger & chips",
        description: "",
        price: 4.1,
      },
      {
        id: 98,
        name: "chicken zonger burger & chips",
        description: "",
        price: 3.9,
      },
      {
        id: 99,
        name: "veggie burger & chips",
        description: "",
        price: 3.6,
      },
      {
        id: 100,
        name: "halloumi burger & chips",
        description: "",
        price: 3.3,
      },
      {
        id: 101,
        name: "kids sausage box",
        description: "",
        price: 2.1,
      },
      {
        id: 102,
        name: "kids 6 nuggets meal",
        description: "",
        price: 3.3,
      },
      {
        id: 103,
        name: "doner kebab meal",
        description:
          "kebab in pitta bread with salad served with a side of chips in tray",
        price: 5.7,
      },
      {
        id: 104,
        name: "chicken kebab meal",
        description:
          "chicken kebab in a pitta bread with salad served with a side of chips in tray",
        price: 5.9,
      },
      {
        id: 105,
        name: "mixed 2 meat kebab meal",
        description:
          "2 x meats kebab in a pitta bread served with salad with a side of chips in tray",
        price: 6,
      },
      {
        id: 106,
        name: "mixed 3 meat kebab meal",
        description:
          "3 x meats kebab in a pitta bread served with salad with a side of chips in tray",
        price: 6.1,
      },
    ],
  },
];

export default PRODUCTS_DATA;
