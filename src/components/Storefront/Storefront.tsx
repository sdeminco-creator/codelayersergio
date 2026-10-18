import { FormEvent, useEffect, useState } from 'react';

import { ICartProduct, IProduct } from 'models';
import { useCart } from 'contexts/cart-context';
import { useProducts } from 'contexts/products-context';

import { getStoreProduct, StoreProduct, storeProducts, toCartProduct } from './catalog';
import * as S from './style';

type Route = 'home' | 'listing' | 'product' | 'cart';

const routeFromPath = (): Route => {
  if (window.location.pathname.startsWith('/product')) return 'product';
  if (window.location.pathname.startsWith('/cart')) return 'cart';
  if (window.location.pathname.startsWith('/new-arrivals')) return 'listing';
  return 'home';
};

const imageForProduct = (product: IProduct | ICartProduct) =>
  getStoreProduct(product.id).image;

const StoreHeader = ({
  route,
  onNavigate,
  onOpenCart,
  cartCount,
}: {
  route: Route;
  onNavigate(route: Route): void;
  onOpenCart(): void;
  cartCount: number;
}) => (
  <>
    <S.Announcement>
      YOUR EVERYDAY ROTATION, DELIVERED. EXPLORE FREE SHIPPING PICKS.
    </S.Announcement>
    <S.Header>
      <S.Nav aria-label="Store navigation">
        <S.TextAction onClick={() => onNavigate('listing')}>
          All products
          <img alt="" src="/assets/44fe5.svg" />
        </S.TextAction>
        <S.TextAction
          active={route === 'listing'}
          onClick={() => onNavigate('listing')}
        >
          New arrivals
        </S.TextAction>
        <S.TextAction onClick={() => onNavigate('listing')}>T-shirts</S.TextAction>
        <S.TextAction onClick={() => onNavigate('listing')}>
          Sweatshirts
          <img alt="" src="/assets/44fe5.svg" />
        </S.TextAction>
        <S.TextAction onClick={() => onNavigate('home')}>The edit</S.TextAction>
        <S.TextAction onClick={() => onNavigate('home')}>About</S.TextAction>
      </S.Nav>
      <S.HeaderActions>
        <S.IconButton aria-label="Search">
          <img alt="" src="/assets/30c61.svg" />
        </S.IconButton>
        <S.IconButton aria-label="Open cart" onClick={onOpenCart}>
          <img alt="" src="/assets/304ef.svg" />
          {cartCount > 0 && <S.CartBadge>{cartCount}</S.CartBadge>}
        </S.IconButton>
        <S.SignInButton>Sign in</S.SignInButton>
      </S.HeaderActions>
    </S.Header>
  </>
);

const Newsletter = () => {
  const [submitted, setSubmitted] = useState(false);

  const submit = (event: FormEvent) => {
    event.preventDefault();
    setSubmitted(true);
  };

  return (
    <S.Newsletter>
      <S.NewsletterCopy>
        <S.Eyebrow>STAY IN THE LOOP</S.Eyebrow>
        <S.SectionTitle>Good things. Straight to your inbox.</S.SectionTitle>
        <p>New arrivals, fresh edits and the pieces you won’t want to miss.</p>
      </S.NewsletterCopy>
      <S.NewsletterForm onSubmit={submit}>
        <label>
          Email address
          <input
            aria-label="Email address"
            placeholder={submitted ? 'You’re on the list.' : 'Your email address'}
            type="email"
          />
        </label>
        <S.PrimaryButton type="submit">
          {submitted ? 'Thank you' : 'Sign me up'}
        </S.PrimaryButton>
      </S.NewsletterForm>
    </S.Newsletter>
  );
};

const StoreFooter = ({ onNavigate }: { onNavigate(route: Route): void }) => (
  <S.Footer>
    <S.FooterDirectory>
      <S.FooterLead>
        <h2>
          Wear what
          <br />
          makes you, you.
        </h2>
        <p>
          Graphic tees, easy layers and everyday favourites. Find your next
          rotation.
        </p>
      </S.FooterLead>
      <S.FooterColumn>
        <strong>SHOP</strong>
        <button onClick={() => onNavigate('listing')}>All products</button>
        <button onClick={() => onNavigate('listing')}>New arrivals</button>
        <button onClick={() => onNavigate('listing')}>T-shirts</button>
        <button onClick={() => onNavigate('listing')}>Sweatshirts</button>
      </S.FooterColumn>
      <S.FooterColumn>
        <strong>HELP</strong>
        <button>Shipping & delivery</button>
        <button>Returns & exchanges</button>
        <button>Size guide</button>
        <button>Contact us</button>
      </S.FooterColumn>
      <S.FooterColumn>
        <strong>FOLLOW ALONG</strong>
        <button>Instagram</button>
        <button>Pinterest</button>
        <button>TikTok</button>
        <button>The edit</button>
      </S.FooterColumn>
    </S.FooterDirectory>
    <S.FooterBottom>
      <span>© 2026. All rights reserved.</span>
      <span>Privacy policy · Terms & conditions</span>
      <span>English / USD $</span>
    </S.FooterBottom>
  </S.Footer>
);

const ProductCard = ({
  product,
  onProduct,
  onAdd,
}: {
  product: StoreProduct;
  onProduct(product: StoreProduct): void;
  onAdd(product: StoreProduct): void;
}) => {
  const dollars = Math.floor(product.price);
  const cents = product.price.toFixed(2).slice(-2);

  return (
    <S.ProductCard>
      <S.ProductMedia
        aria-label={`View ${product.title}`}
        onClick={() => onProduct(product)}
      >
        <img alt={product.title} src={product.image} />
        {product.freeShipping && <S.ShippingBadge>Free shipping</S.ShippingBadge>}
      </S.ProductMedia>
      <S.ProductName onClick={() => onProduct(product)}>
        {product.title}
      </S.ProductName>
      <S.ProductMeta>
        {product.fit} · {product.colour}
      </S.ProductMeta>
      <S.PriceAccent />
      <S.ProductPrice>
        $ <strong>{dollars}</strong>.{cents}
        <small>
          or {product.installments} x $
          {(product.price / product.installments).toFixed(2)}
        </small>
      </S.ProductPrice>
      <S.CardButton onClick={() => onAdd(product)}>Choose size</S.CardButton>
    </S.ProductCard>
  );
};

const HomePage = ({
  onNavigate,
  onProduct,
  onAdd,
}: {
  onNavigate(route: Route): void;
  onProduct(product: StoreProduct): void;
  onAdd(product: StoreProduct): void;
}) => (
  <>
    <S.Hero>
      <S.HeroCopy>
        <S.Eyebrow>THE EVERYDAY EDIT / NEW SEASON</S.Eyebrow>
        <S.HeroTitle>
          Good days.
          <br />
          Great tees.
        </S.HeroTitle>
        <S.HeroText>
          Fresh graphics. Easy fits. A little more you. Meet your next everyday
          favourites.
        </S.HeroText>
        <S.HeroCta onClick={() => onNavigate('listing')}>
          Shop new arrivals
        </S.HeroCta>
      </S.HeroCopy>
    </S.Hero>
    <S.Benefits>
      <S.Benefit>Free shipping on selected styles</S.Benefit>
      <S.Benefit>Sizes XS — XXL</S.Benefit>
      <S.Benefit>Easy pieces. Endless combinations.</S.Benefit>
    </S.Benefits>
    <S.Section>
      <S.SectionHead>
        <div>
          <S.Eyebrow>FIND YOUR FIT</S.Eyebrow>
          <S.SectionTitle>Your style. Your rules.</S.SectionTitle>
        </div>
        <S.InlineAction onClick={() => onNavigate('listing')}>
          Explore all products
          <img alt="" src="/assets/3e11a.svg" />
        </S.InlineAction>
      </S.SectionHead>
      <S.CategoryGrid>
        {[
          ['/assets/fa223.png', 'Graphic tees', 'A little statement goes a long way.'],
          ['/assets/81cd0.png', 'Cropped & oversized', 'Less ordinary. More you.'],
          ['/assets/8aaff.png', 'Sweatshirts', 'The off-duty essentials.'],
        ].map(([image, title, copy]) => (
          <S.CategoryCard key={title} onClick={() => onNavigate('listing')}>
            <img alt={title} src={image} />
            <S.CategoryDetails>
              <span>
                <strong>{title}</strong>
                <small>{copy}</small>
              </span>
              <b>↗</b>
            </S.CategoryDetails>
          </S.CategoryCard>
        ))}
      </S.CategoryGrid>
    </S.Section>
    <S.Showcase>
      <S.ShowcaseIntro>
        <S.Eyebrow>NEW IN / THE T-SHIRT EDIT</S.Eyebrow>
        <S.SectionTitle>
          Fresh in
          <br />
          the rotation.
        </S.SectionTitle>
        <p>
          From playful prints to easy silhouettes. Discover the pieces that do
          more with less.
        </p>
        <S.InlineAction onClick={() => onNavigate('listing')}>
          Shop all T-shirts
          <img alt="" src="/assets/3e11a.svg" />
        </S.InlineAction>
      </S.ShowcaseIntro>
      {storeProducts.slice(0, 2).map((product) => (
        <ProductCard
          key={product.sourceId}
          onAdd={onAdd}
          onProduct={onProduct}
          product={product}
        />
      ))}
    </S.Showcase>
    <S.Story>
      <img alt="Friends wearing the off-duty collection" src="/assets/be8eb.png" />
      <S.StoryCopy>
        <S.Eyebrow>THE OFF-DUTY UNIFORM</S.Eyebrow>
        <S.HeroTitle>
          No plans.
          <br />
          Just style.
        </S.HeroTitle>
        <p>Laid-back layers. Standout attitude. Your weekend starts here.</p>
        <S.LightButton onClick={() => onNavigate('listing')}>
          Explore sweatshirts
        </S.LightButton>
      </S.StoryCopy>
    </S.Story>
    <S.Editorial>
      <S.EditorialCopy>
        <S.Eyebrow>MORE THAN WHAT YOU WEAR</S.Eyebrow>
        <S.SectionTitle>
          Less dress code.
          <br />
          More self-expression.
        </S.SectionTitle>
        <p>
          A favourite tee is never just a tee. It’s the print you connect with,
          the fit you live in, the piece that feels like you. We’re here for all
          the ways you make it your own.
        </p>
        <S.InlineAction onClick={() => onNavigate('listing')}>
          Discover the edit
          <img alt="" src="/assets/3e11a.svg" />
        </S.InlineAction>
      </S.EditorialCopy>
      <img alt="Everyday expression campaign" src="/assets/f8aec.png" />
    </S.Editorial>
    <Newsletter />
    <StoreFooter onNavigate={onNavigate} />
  </>
);

const ListingPage = ({
  onProduct,
  onAdd,
  onNavigate,
}: {
  onProduct(product: StoreProduct): void;
  onAdd(product: StoreProduct): void;
  onNavigate(route: Route): void;
}) => (
  <>
    <S.CollectionHero>
      <div>
        <S.Eyebrow>THE EVERYDAY EDIT / NEW SEASON</S.Eyebrow>
        <S.CollectionTitle>New arrivals.</S.CollectionTitle>
        <S.CollectionText>
          Fresh graphics. Easy fits. A little more you.
          <br />
          Meet the latest additions to your everyday rotation.
        </S.CollectionText>
        <S.Muted>
          <S.AccentLine />
          EASY PIECES. ENDLESS COMBINATIONS.
        </S.Muted>
      </div>
      <img alt="Good days, great tees campaign" src="/assets/00070.png" />
    </S.CollectionHero>
    <S.Assortment>
      <S.Tabs>
        <S.Tab active>All styles</S.Tab>
        <S.Tab>Graphic tees</S.Tab>
        <S.Tab>Cropped & oversized</S.Tab>
        <S.Tab>Sweatshirts</S.Tab>
      </S.Tabs>
      <S.Filters>
        <S.FilterSet>
          <span>
            <img alt="" height="18" src="/assets/a1f80.svg" width="18" /> Filter by
          </span>
          {['Size', 'Colour', 'Fit', 'Price'].map((label) => (
            <S.FilterControl key={label}>
              {label}
              <img alt="" src="/assets/a327e.svg" />
            </S.FilterControl>
          ))}
        </S.FilterSet>
        <S.FilterControl>
          Sort by · Options
          <img alt="" src="/assets/a327e.svg" />
        </S.FilterControl>
      </S.Filters>
      <S.ProductGrid>
        {storeProducts.map((product) => (
          <ProductCard
            key={product.sourceId}
            onAdd={onAdd}
            onProduct={onProduct}
            product={product}
          />
        ))}
      </S.ProductGrid>
      <S.CollectionCompletion>
        <S.Muted>You’ve seen all 8 styles.</S.Muted>
        <S.SectionTitle>Your next everyday favourite is here.</S.SectionTitle>
      </S.CollectionCompletion>
    </S.Assortment>
    <Newsletter />
    <StoreFooter onNavigate={onNavigate} />
  </>
);

const ProductPage = ({
  product,
  onAdd,
  onProduct,
  onNavigate,
}: {
  product: StoreProduct;
  onAdd(product: StoreProduct, quantity?: number): void;
  onProduct(product: StoreProduct): void;
  onNavigate(route: Route): void;
}) => {
  const [size, setSize] = useState('M');
  const [quantity, setQuantity] = useState(1);

  return (
    <>
      <S.ProductOverview>
        <S.Breadcrumb>
          <span>Home</span>
          <span>/</span>
          <span>New arrivals</span>
          <span>/</span>
          <span>{product.title}</span>
        </S.Breadcrumb>
        <S.ProductDetail>
          <S.ProductGallery>
            <S.Thumbnails>
              <img alt={`${product.title} front view`} src={product.image} />
              <img alt={`${product.title} print detail`} src={product.image} />
              <small>Front view & print detail</small>
            </S.Thumbnails>
            <S.MainProductImage>
              <img alt={product.title} src={product.image} />
              <span>THE EVERYDAY EDIT</span>
              <S.ZoomButton aria-label="Zoom product image">
                <img alt="" src="/assets/e3693.svg" />
              </S.ZoomButton>
            </S.MainProductImage>
          </S.ProductGallery>
          <S.Purchase>
            <div>
              <S.Eyebrow>
                <S.AccentLine />
                NEW ARRIVALS / GRAPHIC TEES
              </S.Eyebrow>
              <S.ProductTitle>{product.title}</S.ProductTitle>
              <S.Muted>
                {product.fit} · {product.colour}
              </S.Muted>
            </div>
            <div>
              <S.LargePrice>$ {product.price.toFixed(2)}</S.LargePrice>
              <S.Muted>
                or {product.installments} x $
                {(product.price / product.installments).toFixed(2)}
              </S.Muted>
            </div>
            <S.Divider />
            <S.Colour>
              <img alt="" src="/assets/acd0c.svg" />
              Colour: {product.colour}
            </S.Colour>
            <div>
              <S.SizeHead>
                <S.Eyebrow>Size: {size}</S.Eyebrow>
                <S.InlineAction>
                  <img alt="" src="/assets/e4e46.svg" /> Size guide
                </S.InlineAction>
              </S.SizeHead>
              <S.SizeGrid>
                {['XS', 'S', 'M', 'L', 'XL'].map((option) => (
                  <S.SizeButton
                    key={option}
                    onClick={() => setSize(option)}
                    selected={size === option}
                  >
                    {option}
                  </S.SizeButton>
                ))}
              </S.SizeGrid>
              <S.Muted>An easy cropped fit. Choose your usual size.</S.Muted>
            </div>
            <S.AddRow>
              <S.Quantity>
                <button
                  aria-label="Decrease quantity"
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                >
                  −
                </button>
                <span>{quantity}</span>
                <button
                  aria-label="Increase quantity"
                  onClick={() => setQuantity(quantity + 1)}
                >
                  +
                </button>
              </S.Quantity>
              <S.PrimaryButton onClick={() => onAdd(product, quantity)}>
                Add to bag — $ {(product.price * quantity).toFixed(2)}
              </S.PrimaryButton>
            </S.AddRow>
            <S.Muted>
              <img alt="" height="16" src="/assets/7ba56.svg" width="16" /> Free
              shipping on this piece. A little extra good.
            </S.Muted>
            <div>
              <S.InfoBlock>
                <strong>A little more groovy</strong>
                <p>
                  A feel-good graphic, an easy cropped silhouette and an
                  off-white base that goes with everything. Throw it on with
                  high-waisted denim and make it part of your everyday rotation.
                </p>
              </S.InfoBlock>
              <S.InfoBlock>
                <strong>Fit & care</strong>
                <p>
                  Cropped length with a relaxed shape and classic crew neck.
                  Wash cold with similar colours, inside out. Air dry and avoid
                  ironing directly on the print.
                </p>
              </S.InfoBlock>
              <S.InfoBlock>
                <strong>Shipping & returns</strong>
                <p>
                  Free shipping on this item. Delivery options and estimated
                  arrival are shown at checkout.
                </p>
              </S.InfoBlock>
            </div>
          </S.Purchase>
        </S.ProductDetail>
      </S.ProductOverview>
      <S.Section>
        <S.SectionHead>
          <div>
            <S.Eyebrow>KEEP THE GOOD DAYS GOING</S.Eyebrow>
            <S.SectionTitle>Good company for your rotation.</S.SectionTitle>
          </div>
          <S.InlineAction onClick={() => onNavigate('listing')}>
            Explore all new arrivals
            <img alt="" src="/assets/3e11a.svg" />
          </S.InlineAction>
        </S.SectionHead>
        <S.ProductGrid>
          {storeProducts.slice(1, 5).map((recommended) => (
            <ProductCard
              key={recommended.sourceId}
              onAdd={onAdd}
              onProduct={onProduct}
              product={recommended}
            />
          ))}
        </S.ProductGrid>
      </S.Section>
      <Newsletter />
      <StoreFooter onNavigate={onNavigate} />
    </>
  );
};

const CartItem = ({
  product,
  compact,
  onRemove,
  onIncrease,
  onDecrease,
}: {
  product: ICartProduct;
  compact?: boolean;
  onRemove(): void;
  onIncrease(): void;
  onDecrease(): void;
}) => (
  <S.CartItem compact={compact}>
    <img alt={product.title} src={imageForProduct(product)} />
    <S.CartItemInfo>
      <div>
        <h3>{product.title}</h3>
        <p>
          {product.style || 'Off white'} / Size{' '}
          {product.availableSizes[0] || 'M'}
        </p>
        <p>${product.price.toFixed(2)}</p>
        {product.isFreeShipping && (
          <p>
            <S.AccentLine />
            Free shipping
          </p>
        )}
      </div>
      {compact ? (
        <S.SizeHead>
          <S.CartQuantity>
            <button disabled={product.quantity === 1} onClick={onDecrease}>
              −
            </button>
            <span>{product.quantity}</span>
            <button onClick={onIncrease}>+</button>
          </S.CartQuantity>
          <S.Remove onClick={onRemove}>Remove</S.Remove>
        </S.SizeHead>
      ) : (
        <S.Remove onClick={onRemove}>Remove</S.Remove>
      )}
    </S.CartItemInfo>
    {!compact && (
      <>
        <S.CartQuantity>
          <button disabled={product.quantity === 1} onClick={onDecrease}>
            −
          </button>
          <span>{product.quantity}</span>
          <button onClick={onIncrease}>+</button>
        </S.CartQuantity>
        <S.CartLinePrice>
          ${(product.price * product.quantity).toFixed(2)}
        </S.CartLinePrice>
      </>
    )}
  </S.CartItem>
);

const ShippingNote = () => (
  <S.ShippingNote>
    <img alt="" src="/assets/9e8d6.svg" />
    <div>
      <strong>Great tees. Free delivery.</strong>
      <p>
        Your selected styles qualify for free shipping. One less thing to think
        about.
      </p>
    </div>
  </S.ShippingNote>
);

const OrderSummary = ({
  count,
  total,
  onCheckout,
}: {
  count: number;
  total: number;
  onCheckout(): void;
}) => (
  <S.Summary>
    <h2>Order summary</h2>
    <S.SummaryLine>
      <span>Subtotal ({count} items)</span>
      <b>${total.toFixed(2)}</b>
    </S.SummaryLine>
    <S.SummaryLine>
      <span>Shipping</span>
      <b>Free</b>
    </S.SummaryLine>
    <S.SummaryLine>
      <span>Taxes</span>
      <b>Calculated at checkout</b>
    </S.SummaryLine>
    <S.SummaryLine>
      <span>Have a promo code?</span>
      <b>+</b>
    </S.SummaryLine>
    <S.SummaryTotal>
      <span>Total</span>
      <strong>${total.toFixed(2)}</strong>
    </S.SummaryTotal>
    <S.PrimaryButton disabled={!count} onClick={onCheckout}>
      Checkout
    </S.PrimaryButton>
    <S.SecureNote>
      <img alt="" src="/assets/e3f56.svg" />
      Safe & secure checkout
    </S.SecureNote>
  </S.Summary>
);

const FullCartPage = ({
  products,
  total,
  onNavigate,
  onRemove,
  onIncrease,
  onDecrease,
}: {
  products: ICartProduct[];
  total: number;
  onNavigate(route: Route): void;
  onRemove(product: ICartProduct): void;
  onIncrease(product: ICartProduct): void;
  onDecrease(product: ICartProduct): void;
}) => (
  <>
    <S.CartPage>
      <S.Breadcrumb>
        <span>Home</span>
        <span>/</span>
        <span>Cart</span>
      </S.Breadcrumb>
      <S.CartIntro>
        <div>
          <S.Eyebrow>YOUR EVERYDAY ROTATION</S.Eyebrow>
          <S.CartTitle>
            Your cart.<sup>({products.length})</sup>
          </S.CartTitle>
          <S.Muted>Good choices. Great everyday favourites.</S.Muted>
        </div>
        <S.InlineAction onClick={() => onNavigate('listing')}>
          Continue shopping
          <img alt="" src="/assets/3e11a.svg" />
        </S.InlineAction>
      </S.CartIntro>
      <S.CartLayout>
        <S.CartList>
          {products.length ? (
            products.map((product) => (
              <CartItem
                key={product.id}
                onDecrease={() => onDecrease(product)}
                onIncrease={() => onIncrease(product)}
                onRemove={() => onRemove(product)}
                product={product}
              />
            ))
          ) : (
            <S.EmptyCart>
              Your rotation is waiting. Add a favourite to get started.
            </S.EmptyCart>
          )}
          <ShippingNote />
        </S.CartList>
        <OrderSummary
          count={products.reduce((sum, product) => sum + product.quantity, 0)}
          onCheckout={() => window.alert('Checkout ready')}
          total={total}
        />
      </S.CartLayout>
    </S.CartPage>
    <StoreFooter onNavigate={onNavigate} />
  </>
);

const QuickCart = ({
  products,
  total,
  onClose,
  onNavigate,
  onRemove,
  onIncrease,
  onDecrease,
}: {
  products: ICartProduct[];
  total: number;
  onClose(): void;
  onNavigate(route: Route): void;
  onRemove(product: ICartProduct): void;
  onIncrease(product: ICartProduct): void;
  onDecrease(product: ICartProduct): void;
}) => {
  const count = products.reduce((sum, product) => sum + product.quantity, 0);

  return (
    <>
      <S.Overlay onClick={onClose} />
      <S.Drawer aria-label="Quick cart">
        <S.DrawerHead>
          <S.DrawerToolbar>
            <S.Eyebrow>YOUR EVERYDAY ROTATION</S.Eyebrow>
            <S.Close aria-label="Close cart" onClick={onClose} />
          </S.DrawerToolbar>
          <S.DrawerTitle>
            Your cart.<sup>({count})</sup>
          </S.DrawerTitle>
          <S.Muted>Good choices. Great everyday favourites.</S.Muted>
        </S.DrawerHead>
        <S.DrawerBody>
          {products.length ? (
            products.map((product) => (
              <CartItem
                compact
                key={product.id}
                onDecrease={() => onDecrease(product)}
                onIncrease={() => onIncrease(product)}
                onRemove={() => onRemove(product)}
                product={product}
              />
            ))
          ) : (
            <S.EmptyCart>
              Your rotation is waiting. Add a favourite to get started.
            </S.EmptyCart>
          )}
          <ShippingNote />
        </S.DrawerBody>
        <S.DrawerSummary>
          <S.SummaryTotal>
            <span>Subtotal ({count} items)</span>
            <strong>${total.toFixed(2)}</strong>
          </S.SummaryTotal>
          <S.PrimaryButton
            disabled={!count}
            onClick={() => {
              onClose();
              onNavigate('cart');
            }}
          >
            Checkout
          </S.PrimaryButton>
          <S.InlineAction
            onClick={() => {
              onClose();
              onNavigate('listing');
            }}
          >
            Continue shopping
          </S.InlineAction>
        </S.DrawerSummary>
      </S.Drawer>
    </>
  );
};

const Storefront = () => {
  const [route, setRoute] = useState<Route>(routeFromPath);
  const [selectedProduct, setSelectedProduct] = useState(storeProducts[0]);
  const { products: catalogProducts, fetchProducts } = useProducts();
  const {
    products: cartProducts,
    total,
    isOpen,
    openCart,
    closeCart,
    addProduct,
    removeProduct,
    increaseProductQuantity,
    decreaseProductQuantity,
  } = useCart();

  useEffect(() => {
    fetchProducts();
  }, [fetchProducts]);

  useEffect(() => {
    const updateRoute = () => setRoute(routeFromPath());
    window.addEventListener('popstate', updateRoute);
    return () => window.removeEventListener('popstate', updateRoute);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  const paths: Record<Route, string> = {
    home: '/',
    listing: '/new-arrivals',
    product: `/product/${selectedProduct.sourceId}`,
    cart: '/cart',
  };

  const navigate = (nextRoute: Route) => {
    window.history.pushState({}, '', paths[nextRoute]);
    setRoute(nextRoute);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const viewProduct = (product: StoreProduct) => {
    setSelectedProduct(product);
    window.history.pushState({}, '', `/product/${product.sourceId}`);
    setRoute('product');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const addStoreProduct = (product: StoreProduct, quantity = 1) => {
    addProduct({
      ...toCartProduct(product, catalogProducts),
      quantity,
    });
    openCart();
  };

  const productFromUrl = (() => {
    const id = Number(window.location.pathname.split('/').pop());
    return Number.isFinite(id) ? getStoreProduct(id) : selectedProduct;
  })();

  return (
    <S.Page>
      <StoreHeader
        cartCount={total.productQuantity}
        onNavigate={navigate}
        onOpenCart={openCart}
        route={route}
      />
      {route === 'home' && (
        <HomePage
          onAdd={addStoreProduct}
          onNavigate={navigate}
          onProduct={viewProduct}
        />
      )}
      {route === 'listing' && (
        <ListingPage
          onAdd={addStoreProduct}
          onNavigate={navigate}
          onProduct={viewProduct}
        />
      )}
      {route === 'product' && (
        <ProductPage
          onAdd={addStoreProduct}
          onNavigate={navigate}
          onProduct={viewProduct}
          product={productFromUrl}
        />
      )}
      {route === 'cart' && (
        <FullCartPage
          onDecrease={decreaseProductQuantity}
          onIncrease={increaseProductQuantity}
          onNavigate={navigate}
          onRemove={removeProduct}
          products={cartProducts}
          total={total.totalPrice}
        />
      )}
      {isOpen && (
        <QuickCart
          onClose={closeCart}
          onDecrease={decreaseProductQuantity}
          onIncrease={increaseProductQuantity}
          onNavigate={navigate}
          onRemove={removeProduct}
          products={cartProducts}
          total={total.totalPrice}
        />
      )}
    </S.Page>
  );
};

export default Storefront;
