 const CATALOGUES = [
    {
      id:'furniture', name:'Living & Dining',
      blurb:'Solid-wood seating and tables built for daily life.',
      note:'Mortise-and-tenon joinery keeps every frame rigid without metal fasteners.',
      items:[
        {id:'f1',name:'Sal Wood Dining Table',wood:'Sal',finish:'Natural oil',dims:'180 × 90 × 76 cm',price:68000,icon:'table',tag:'Bestseller'},
        {id:'f2',name:'Teak Lounge Chair',wood:'Teak',finish:'Matte lacquer',dims:'70 × 75 × 80 cm',price:24500,icon:'chair'},
        {id:'f3',name:'Handcarved Sofa Set (3+2)',wood:'Sal',finish:'Walnut stain',dims:'210 cm / 160 cm',price:145000,icon:'sofa',tag:'Signature'},
        {id:'f4',name:'Chitwan Coffee Table',wood:'Sisau',finish:'Natural oil',dims:'120 × 60 × 45 cm',price:32000,icon:'table'},
        {id:'f5',name:'Rocking Chair',wood:'Teak',finish:'Hand-rubbed wax',dims:'65 × 90 × 100 cm',price:27500,icon:'chair'},
        {id:'f6',name:'Open Bookshelf',wood:'Pine',finish:'Honey wax',dims:'90 × 30 × 180 cm',price:38500,icon:'shelf'}
      ]
    },
    {
      id:'bedroom', name:'Bedroom',
      blurb:'Beds, wardrobes and storage with hand-finished edges.',
      note:'Slatted bases and reinforced corners for years of daily use.',
      items:[
        {id:'b1',name:'Four-Poster Bed (Queen)',wood:'Sal',finish:'Dark walnut',dims:'210 × 160 cm',price:165000,icon:'bed',tag:'Signature'},
        {id:'b2',name:'Two-Door Wardrobe',wood:'Sal',finish:'Matte PU',dims:'120 × 60 × 200 cm',price:92000,icon:'cabinet'},
        {id:'b3',name:'Bedside Table',wood:'Teak',finish:'Natural oil',dims:'45 × 40 × 55 cm',price:14500,icon:'cabinet'},
        {id:'b4',name:'Dressing Table with Mirror',wood:'Sisau',finish:'Honey wax',dims:'110 × 45 × 150 cm',price:58000,icon:'mirror'}
      ]
    },
    {
      id:'kitchen', name:'Kitchen & Dining',
      blurb:'Food-safe bowls, boards and serving ware.',
      note:'Finished with food-safe oil — re-oil once a year to keep the grain alive.',
      items:[
        {id:'k1',name:'Chakati Bowl Set (4 pcs)',wood:'Chakati',finish:'Food-safe oil',dims:'12–20 cm dia',price:4800,icon:'bowl'},
        {id:'k2',name:'Teak Cutting Board',wood:'Teak',finish:'Food-safe oil',dims:'40 × 25 × 2.5 cm',price:2600,icon:'board',tag:'Bestseller'},
        {id:'k3',name:'Serving Tray with Handles',wood:'Sisau',finish:'Natural oil',dims:'45 × 30 cm',price:3200,icon:'tray'},
        {id:'k4',name:'Salad Server Pair',wood:'Teak',finish:'Food-safe oil',dims:'30 cm length',price:1800,icon:'utensil'},
        {id:'k5',name:'Spice Box (Masala Dabba)',wood:'Sisau',finish:'Natural oil',dims:'22 cm dia',price:3900,icon:'box'}
      ]
    },
    {
      id:'decor', name:'Home Décor',
      blurb:'Carved panels, frames and accents for the walls.',
      note:'Each piece is carved and sanded by hand, so no two are exactly alike.',
      items:[
        {id:'d1',name:'Carved Wall Panel',wood:'Sal',finish:'Antique finish',dims:'90 × 90 cm',price:22000,icon:'panel',tag:'Signature'},
        {id:'d2',name:'Turned Wooden Vase',wood:'Sisau',finish:'Matte lacquer',dims:'H 40 cm',price:6500,icon:'vase'},
        {id:'d3',name:'Photo Frame Set (3 pcs)',wood:'Teak',finish:'Natural oil',dims:'5 × 7 in',price:2800,icon:'frame'},
        {id:'d4',name:'Carved Table Lamp',wood:'Teak',finish:'Honey wax',dims:'H 45 cm',price:7200,icon:'lamp'},
        {id:'d5',name:'Round Mirror Frame',wood:'Sal',finish:'Walnut stain',dims:'60 cm dia',price:9500,icon:'mirror'}
      ]
    },
    {
      id:'handicraft', name:'Handicrafts & Gifts',
      blurb:'Traditional Nepali carving, small and giftable.',
      note:'Traditional Chitwan carving, made to be gifted and kept.',
      items:[
        {id:'h1',name:'Mandala Wall Art',wood:'Sisau',finish:'Hand-painted',dims:'45 cm dia',price:5400,icon:'mandala'},
        {id:'h2',name:'Pagoda Model',wood:'Sal',finish:'Natural',dims:'H 30 cm',price:4200,icon:'pagoda'},
        {id:'h3',name:'Carved Elephant Pair',wood:'Sal',finish:'Antique',dims:'H 18 cm',price:3600,icon:'elephant',tag:'Bestseller'},
        {id:'h4',name:'Jewellery Box with Brass Inlay',wood:'Sisau',finish:'Brass inlay',dims:'20 × 15 × 10 cm',price:4900,icon:'box'},
        {id:'h5',name:'Wooden Chess Set',wood:'Teak & Sisau',finish:'Polished',dims:'40 × 40 cm',price:8600,icon:'chess'}
      ]
    },
    {
      id:'architectural', name:'Doors & Joinery',
      blurb:'Carved doors, windows and structural joinery.',
      note:'Made to your site measurements; installation available across Bagmati.',
      items:[
        {id:'a1',name:'Handcarved Teak Door',wood:'Teak',finish:'Natural oil',dims:'210 × 90 cm',price:185000,icon:'door',tag:'Signature'},
        {id:'a2',name:'Newari Style Window',wood:'Sal',finish:'Carved',dims:'120 × 90 cm',price:74000,icon:'window'},
        {id:'a3',name:'Staircase Railing',wood:'Sal',finish:'Matte PU',dims:'Custom',price:3500,unit:'/ running ft',icon:'stair'},
        {id:'a4',name:'Carved Ceiling Beam',wood:'Sal',finish:'Natural',dims:'Custom',price:4200,unit:'/ running ft',icon:'beam'},
        {id:'a5',name:'Decorative Wooden Pillar',wood:'Sal',finish:'Antique',dims:'H 240 cm',price:96000,icon:'pillar'}
      ]
    }
  ];

  const jsonString = JSON.stringify(CATALOGUES, null, 2);

  console.log(jsonString);