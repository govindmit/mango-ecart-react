
import React, { useEffect, useState, useRef } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, FormControl, IconButton, MenuItem, Select } from '@mui/material';
import './style.css'; // Import your CSS file
import configs from '../../../config/config';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

const productData = [
  {
    "id": 2,
    "sku": "acsku",
    "name": "Air Conditioner",
    "description": "<span>Air conditioning (often referred to as AC, A/C or air con) is&#160;</span><b>a system used to cool down the temperature in an inside space by removing the existing heat and moisture from the room</b><span>. Essentially, they work by taking warm air into a system and dispersing cold air, but there is much more to this process.</span>",
    "price": "852",
    "path": "/uploads/imageAC.jpeg"
  },
  {
    "id": 4,
    "sku": "skushirt",
    "name": "Shirt",
    "description": "<p>A&#160;<b>shirt</b>&#160;is a cloth garment for the upper body (from the neck to the waist).</p><p>Originally an&#160;<a href=\"https://en.wikipedia.org/wiki/Undergarment\" class=\"mw-redirect\" title=\"Undergarment\">undergarment</a>&#160;worn exclusively by men, it has become, in&#160;<a href=\"https://en.wikipedia.org/wiki/American_English\" title=\"American English\">American English</a>, a catch-all term for a broad variety of upper-body garments and undergarments. In&#160;<a href=\"https://en.wikipedia.org/wiki/British_English\" title=\"British English\">British English</a>, a shirt is more specifically a garment with a&#160;<a href=\"https://en.wikipedia.org/wiki/Collar_(clothing)\" title=\"Collar (clothing)\">collar</a>, sleeves with&#160;<a href=\"https://en.wikipedia.org/wiki/Cuff\" title=\"Cuff\">cuffs</a>, and a full vertical opening with buttons or snaps (North Americans would call that a &#34;<a href=\"https://en.wikipedia.org/wiki/Dress_shirt\" title=\"Dress shirt\">dress shirt</a>&#34;, a specific type of collared shirt). A shirt can also be worn with a&#160;<a href=\"https://en.wikipedia.org/wiki/Necktie\" title=\"Necktie\">necktie</a>&#160;under the shirt collar.</p>",
    "price": "450",
    "path": "/uploads/imageshirt.jpg"
  },
  {
    "id": 8,
    "sku": "puzzleSku",
    "name": "Puzzle Game",
    "description": "<div class=\"wWOJcd\" aria-controls=\"exacc_rFD_Y5uJLK674-EPjMK_sAc_8\" aria-expanded=\"true\" aria-labelledby=\"exacc_rFD_Y5uJLK674-EPjMK_sAc_7\" role=\"button\" tabindex=\"0\"><div class=\"YsGUOb\"><br></div><div class=\"r21Kzd\"></div></div><div class=\"MBtdbb\"><div class=\"ymu2Hb\"><div class=\"t0bRye r2fjmd\"><div><div class=\"wDYxhc\"><div class=\"LGOjhe\" aria-level=\"3\" role=\"heading\"><span class=\"ILfuVd\" lang=\"en\"><span class=\"hgKElc\">What are puzzle games? Puzzle mobile games are&#160;<b>designed to test problem-solving skills including pattern recognition, logic, word completion, or understanding a process</b>.</span></span></div></div></div></div></div></div>",
    "price": "5",
    "path": "/uploads/imagepexels-marko-blazevic-2875617 (1).jpg"
  },
  {
    "id": 27,
    "sku": "testFeatureSku",
    "name": "Feature Products",
    "description": "<strong>Lorem Ipsum</strong><span>&#160;is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</span>",
    "price": "520",
    "path": "/uploads/imageran2.jpeg"
  },
  {
    "id": 29,
    "sku": "cabinetsku",
    "name": "Shoe Cabinet",
    "description": "<div><br></div><div><div><div role=\"button\" tabindex=\"0\" class=\"dnXCYb\" aria-controls=\"_B4waZMuRAsfhseMP_b6q8As_37\" aria-expanded=\"true\"><div class=\"aj35ze\"></div><div class=\"L3Ezfd\"></div></div></div><div class=\"bCOlv\"><div class=\"IZE3Td\"><div class=\"t0bRye r2fjmd\"><div><div class=\"wDYxhc\"><div class=\"LGOjhe\" aria-level=\"3\" role=\"heading\"><span class=\"ILfuVd\" lang=\"en\"><span class=\"hgKElc\">Open shoe cabinets are those shoe racks also known as shoe racks:&#160;<b>grills, open shelves and ladders, without doors or backs, often placed in less visible areas such as walk-in closets, closets or garages, fixed to the wall or behind a door</b>.</span></span></div></div></div></div></div></div></div>",
    "price": "2200",
    "path": "/uploads/imageshoe_cabinet.jpeg"
  },
  {
    "id": 31,
    "sku": "shoesku",
    "name": "Shoes",
    "description": "<strong>Lorem Ipsum</strong><span>&#160;is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</span><br>",
    "price": "200",
    "path": "/uploads/imageshoes.jpeg"
  },
  {
    "id": 31,
    "sku": "shoesku",
    "name": "Shoes",
    "description": "<strong>Lorem Ipsum</strong><span>&#160;is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</span><br>",
    "price": "200",
    "path": "/uploads/imagetest-large.jpg"
  },
  {
    "id": 31,
    "sku": "shoesku",
    "name": "Shoes",
    "description": "<strong>Lorem Ipsum</strong><span>&#160;is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</span><br>",
    "price": "200",
    "path": "/uploads/imagetest.png"
  },
  {
    "id": 38,
    "sku": "testSoftsku",
    "name": "Software Test Product",
    "description": "Test Description",
    "price": "50",
    "path": "/uploads/imagepexels-luis-gomes-546819.jpg"
  },
  {
    "id": 38,
    "sku": "testSoftsku",
    "name": "Software Test Product",
    "description": "Test Description",
    "price": "50",
    "path": "/uploads/imagepexels-karina-zhukovskaya-6446709.jpg"
  },
  {
    "id": 39,
    "sku": "Prod1204",
    "name": "Product1204",
    "description": "This is the description<br>",
    "price": "180",
    "path": "/uploads/imagetest-large.jpg"
  },
  {
    "id": 47,
    "sku": "prodsku",
    "name": "Testing software ",
    "description": "<span>Lorem ipsum dolor sit amet. Qui nemo accusamus aut voluptatem laudantium ut nulla aliquid et deserunt numquam.&#160;</span>",
    "price": "22",
    "path": "/uploads/imagepexels-pixabay-270408.jpg"
  },
  {
    "id": 56,
    "sku": "354fgdfgfd",
    "name": "Shirt",
    "description": "shirt",
    "price": "200",
    "path": "/uploads/imageYellow 3-600x800.jpg"
  },
  {
    "id": 57,
    "sku": "gdfgret34256",
    "name": "shirt",
    "description": "dfdsgfds",
    "price": "200",
    "path": "/uploads/imageYellow 3-600x800.jpg"
  },
  {
    "id": 58,
    "sku": "dsfw53453",
    "name": "Shirt",
    "description": "<h2>What is Lorem Ipsum?</h2><p><strong>Lorem Ipsum</strong>&#160;is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>",
    "price": "200",
    "path": "/uploads/imageshirt.jpeg"
  }
];


const ProductDataCard = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [cardsPerPage, setCardsPerPage] = useState(9);
  const totalPages = Math.ceil(productData.length / cardsPerPage);

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const getPageData = () => {
    const startIndex = (currentPage - 1) * cardsPerPage;
    const endIndex = startIndex + cardsPerPage;
    return productData.slice(startIndex, endIndex);
  };
  const handleChange = (e) => {
    setCardsPerPage(e.target.value);
    setCurrentPage(1)
  }

  const pageData = getPageData();

  return (
    <div className='product-card-container'>
      <div className='product-card-slider'>
        {pageData.map((product, index) => (
          <Card key={index} className='product-card'>
            <CardActionArea>
              <CardMedia
                component='img'
                height='140'
                image={`${configs.baseUrl}${product?.path}`}
              />
              <button className='product-media-button'>New</button>
              <CardContent>
                <Typography gutterBottom variant='h5' component='div'>
                  {product?.name}
                </Typography>
                <Typography variant='body2' color='text.secondary'>
                  ${product?.price}
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        ))}
      </div>
      <div className='pagination'>
      <p>Items per Page:</p>
        <div>
          <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }} >
            <Select
              labelId="demo-simple-select-standard-label"
              id="demo-simple-select-standard"
              value={cardsPerPage}
              onChange={handleChange}
            >
              <MenuItem value="9">10</MenuItem>
              <MenuItem value="24">25</MenuItem>
              <MenuItem value="49">50</MenuItem>
              <MenuItem value="99">100</MenuItem>
            </Select>
          </FormControl>

        </div>
        <div>
          {currentPage} - {Math.min(currentPage * cardsPerPage, productData.length)} of {productData.length}
        </div>
        <div>
          <IconButton
            onClick={() => paginate(currentPage - 1)}
            disabled={currentPage === 1}>
            <ArrowBackIosIcon />
          </IconButton>

          <IconButton
            onClick={() => paginate(currentPage + 1)}
            disabled={currentPage === totalPages}
          >
            <ArrowForwardIosIcon />
          </IconButton>
        </div>
      </div>
    </div>
  );
};

export default ProductDataCard;

