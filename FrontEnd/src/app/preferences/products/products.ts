export const ACCOUNTS = [
  {
    accountId: 2001,
    type: "finalinventory",
    accountName: "Final-Main account",
    dateAdded: "2/12/18",
    lastSynced: "32 minutes ago",
    addedBy: "Shloime Pfeiffer",
    status: 1
  },
  {
    accountId: 2002,
    type: "amazon",
    accountName: "main Amazon",
    dateAdded: "5/9/18",
    lastSynced: "57 minutes ago",
    addedBy: "Shloime Pfeiffer",
    status: 1
  },
  {
    accountId: 2003,
    type: "amazon",
    accountName: "Amazon beauty account",
    dateAdded: "7/25/19",
    lastSynced: "11:09am",
    addedBy: "Shloime Pfeiffer",
    status: 1
  }
];

export const MARKETPLACES = [
  { marketPlaceId: 1, marketPlaceName: "marketplace1" },
  { marketPlaceId: 2, marketPlaceName: "marketplace2" }
];

export const FIELDS = [
  {
    id: 0,
    name: "Item name",
    finaleFieldId: "1",
    finaleFieldName: "product_name",
    amazonFieldId: "1",
    amazonFieldName: "item_name",
    showProductList: 1,
    availableFilter: 1
  },

  {
    id: 1,
    name: "Category",
    finaleFieldId: "1",
    finaleFieldName: "product_name",
    amazonFieldId: "1",
    amazonFieldName: "item_name",
    showProductList: 1,
    availableFilter: 1
  },

  {
    id: 2,
    name: "Condition",
    finaleFieldId: "4",
    finaleFieldName: "product_description",
    amazonFieldId: "2",
    amazonFieldName: "ASIN",
    showProductList: 1,
    availableFilter: 0
  },

  {
    id: 3,
    name: "SKU",
    finaleFieldId: "5",
    finaleFieldName: "product_rating",
    amazonFieldId: "3",
    amazonFieldName: "item_price",
    showProductList: 1,
    availableFilter: 0
  }
];

// export const FINALEFIELDS = [
//   { id: 1, name: "product_name", desc: "desc1, desc2, desc3" },
//   { id: 2, name: "product_name2", desc: "desc1, desc2, desc3" },
//   { id: 3, name: "product_name3", desc: "desc1, desc2, desc3" }
// ];

export const FINALEFIELDS = [
  {
    id: 1,
    name: "product_name",
    sample: '"red kitchen spoon", "blue egg cracker"...'
  },
  {
    id: 2,
    name: "ASIN",
    sample: '"BL203984", "SK92374"...'
  },
  {
    id: 3,
    name: "product_price",
    sample: '"$9.12", "$21.98", "$7.29"...'
  },
  {
    id: 4,
    name: "product_description",
    sample: '"this is sample production description"...'
  },
  {
    id: 5,
    name: "product_rating",
    sample: '"4.5/5", "4.8/5"...'
  }
];
export const AMAZONFIELDS = [
  {
    id: 1,
    name: "item_name",
    sample: '"red kitchen spoon", "blue egg cracker"...'
  },
  {
    id: 2,
    name: "ASIN",
    sample: '"BL203984", "SK92374"...'
  },
  {
    id: 3,
    name: "item_price",
    sample: '"$9.12", "$21.98", "$7.29"...'
  },
  {
    id: 4,
    name: "item_description",
    sample: '"this is sample production description"...'
  },
  {
    id: 5,
    name: "item_rating",
    sample: '"4.5/5", "4.8/5"...'
  }
];
