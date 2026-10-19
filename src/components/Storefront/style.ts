import styled, { css } from 'styled-components/macro';

const medium = css`
  font-family: 'Inter:Medium', Arial, sans-serif;
  font-weight: 500;
`;

const semibold = css`
  font-family: 'Inter:Semi Bold', Arial, sans-serif;
  font-weight: 600;
`;

export const Page = styled.div`
  min-height: 100vh;
  overflow: hidden;
  background: ${({ theme }) => theme.colors.white};
`;

export const Announcement = styled.div`
  display: flex;
  min-height: 32px;
  align-items: center;
  justify-content: center;
  padding: 8px 24px;
  color: ${({ theme }) => theme.colors.white};
  background: ${({ theme }) => theme.colors.primary};
  font-size: 11px;
  text-align: center;
  letter-spacing: 0.01em;
`;

export const Header = styled.header`
  display: flex;
  min-height: 96px;
  align-items: center;
  justify-content: space-between;
  gap: 24px;
  padding: 24px 64px;
  background: ${({ theme }) => theme.colors.white};

  @media (max-width: 900px) {
    min-height: 72px;
    padding: 16px 24px;
  }
`;

export const Nav = styled.nav`
  display: flex;
  align-items: center;
  gap: 32px;

  @media (max-width: 900px) {
    gap: 18px;
    overflow-x: auto;
  }

  @media (max-width: 620px) {
    & > *:nth-child(n + 4) {
      display: none;
    }
  }
`;

export const TextAction = styled.button<{ active?: boolean }>`
  ${semibold};
  padding: 0;
  border: 0;
  color: ${({ theme }) => theme.colors.primary};
  background: transparent;
  font-size: 16px;
  white-space: nowrap;
  cursor: pointer;
  text-decoration: ${({ active }) => (active ? 'underline' : 'none')};
  text-underline-offset: 4px;

  img {
    width: 10px;
    height: 6px;
    margin-left: 4px;
    vertical-align: middle;
  }
`;

export const HeaderActions = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
`;

export const IconButton = styled.button`
  position: relative;
  display: grid;
  width: 28px;
  height: 28px;
  padding: 2px;
  place-items: center;
  border: 0;
  background: transparent;
  cursor: pointer;

  img {
    width: 24px;
    height: 24px;
  }
`;

export const CartBadge = styled.span`
  ${semibold};
  position: absolute;
  top: -6px;
  right: -7px;
  display: grid;
  min-width: 17px;
  height: 17px;
  place-items: center;
  border: 1px solid ${({ theme }) => theme.colors.white};
  border-radius: 50%;
  color: ${({ theme }) => theme.colors.white};
  background: ${({ theme }) => theme.colors.primary};
  font-size: 10px;
`;

export const PrimaryButton = styled.button`
  ${semibold};
  min-height: 52px;
  padding: 8px 32px;
  border: 1px solid ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.white};
  background: ${({ theme }) => theme.colors.primary};
  font-size: 16px;
  cursor: pointer;
  transition: opacity 160ms ease;

  &:hover {
    opacity: 0.86;
  }

  &:disabled {
    cursor: not-allowed;
    opacity: 0.45;
  }
`;

export const SecondaryButton = styled(PrimaryButton)`
  border-color: ${({ theme }) => theme.colors.border};
  color: ${({ theme }) => theme.colors.primary};
  background: ${({ theme }) => theme.colors.white};
`;

export const SignInButton = styled(PrimaryButton)`
  min-height: 40px;
  padding: 7px 28px;

  @media (max-width: 720px) {
    display: none;
  }
`;

export const Hero = styled.section`
  position: relative;
  display: flex;
  min-height: 650px;
  align-items: center;
  padding: 80px 64px;
  color: ${({ theme }) => theme.colors.white};
  background:
    linear-gradient(90deg, rgba(0, 0, 0, 0.72), rgba(0, 0, 0, 0) 65%),
    url('/assets/00070.png') center / cover no-repeat;

  @media (max-width: 720px) {
    min-height: 560px;
    padding: 64px 24px;
    background-position: 62% center;
  }
`;

export const HeroCopy = styled.div`
  position: relative;
  z-index: 1;
  display: flex;
  max-width: 670px;
  flex-direction: column;
  align-items: flex-start;
  gap: 24px;
`;

export const Eyebrow = styled.p`
  ${semibold};
  margin: 0;
  font-size: 12px;
  letter-spacing: 0.01em;
`;

export const HeroTitle = styled.h1`
  ${semibold};
  margin: 0;
  font-size: clamp(58px, 7vw, 100px);
  line-height: 0.96;
  letter-spacing: -0.045em;
`;

export const HeroText = styled.p`
  max-width: 390px;
  margin: 0;
  font-size: 17px;
  line-height: 1.5;
`;

export const LightButton = styled(PrimaryButton)`
  min-width: 220px;
  border-color: ${({ theme }) => theme.colors.white};
  color: ${({ theme }) => theme.colors.primary};
  background: ${({ theme }) => theme.colors.white};
`;

export const HeroCta = styled(LightButton)`
  border-width: 0.556px;
  background: rgb(196, 195, 195);
  line-height: normal;
  opacity: 0.86;
`;

export const Benefits = styled.div`
  display: flex;
  min-height: 80px;
  align-items: center;
  justify-content: space-between;
  gap: 24px;
  padding: 20px 64px;
  border-bottom: 1px solid ${({ theme }) => theme.colors.border};

  @media (max-width: 720px) {
    align-items: flex-start;
    flex-direction: column;
    padding: 28px 24px;
  }
`;

export const Benefit = styled.p`
  display: flex;
  align-items: center;
  gap: 12px;
  margin: 0;
  font-size: 13px;

  &::before {
    width: 18px;
    height: 2px;
    background: ${({ theme }) => theme.colors.secondary};
    content: '';
  }
`;

export const Section = styled.section`
  padding: 80px 64px;

  @media (max-width: 720px) {
    padding: 56px 24px;
  }
`;

export const SectionHead = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  gap: 24px;
  margin-bottom: 32px;

  @media (max-width: 620px) {
    align-items: flex-start;
    flex-direction: column;
  }
`;

export const SectionTitle = styled.h2`
  margin: 12px 0 0;
  font-family: 'Inter:Regular', Arial, sans-serif;
  font-size: clamp(34px, 4vw, 54px);
  font-weight: 400;
  line-height: 1.08;
  letter-spacing: -0.03em;
`;

export const InlineAction = styled.button`
  ${medium};
  padding: 0;
  border: 0;
  background: transparent;
  font-size: 14px;
  cursor: pointer;

  img {
    width: 20px;
    height: 20px;
    margin-left: 12px;
    vertical-align: middle;
  }
`;

export const CategoryGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 24px;

  @media (max-width: 760px) {
    grid-template-columns: 1fr;
  }
`;

export const CategoryCard = styled.button`
  display: flex;
  padding: 0;
  flex-direction: column;
  gap: 18px;
  border: 0;
  background: transparent;
  text-align: left;
  cursor: pointer;

  img {
    width: 100%;
    height: 400px;
    object-fit: cover;
  }
`;

export const CategoryDetails = styled.span`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: space-between;
  gap: 16px;

  strong {
    ${medium};
    display: block;
    font-size: 24px;
  }

  small {
    display: block;
    margin-top: 8px;
    color: ${({ theme }) => theme.colors.muted};
    font-size: 13px;
  }

  b {
    font-size: 25px;
    font-weight: 400;
  }
`;

export const Showcase = styled(Section)`
  display: grid;
  grid-template-columns: minmax(300px, 0.85fr) repeat(2, minmax(240px, 1fr));
  gap: 32px;
  background: ${({ theme }) => theme.colors.surface};

  @media (max-width: 1000px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  @media (max-width: 620px) {
    grid-template-columns: 1fr;
  }
`;

export const ShowcaseIntro = styled.div`
  display: flex;
  padding: 24px 48px 24px 0;
  flex-direction: column;
  align-items: flex-start;
  gap: 28px;

  p {
    max-width: 430px;
    margin: 0;
    color: ${({ theme }) => theme.colors.muted};
    font-size: 16px;
    line-height: 1.6;
  }
`;

export const ProductGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 48px 24px;

  @media (max-width: 980px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  @media (max-width: 540px) {
    grid-template-columns: 1fr;
  }
`;

export const CollectionCompletion = styled.div`
  margin-top: 56px;
  text-align: center;
`;

export const ProductCard = styled.article`
  display: flex;
  min-width: 0;
  flex-direction: column;
  align-items: center;
  gap: 12px;
  text-align: center;
`;

export const ProductMedia = styled.button`
  position: relative;
  width: 100%;
  height: 430px;
  padding: 0;
  overflow: hidden;
  border: 0;
  background: #ececea;
  cursor: pointer;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

export const ShippingBadge = styled.span`
  position: absolute;
  top: 0;
  right: 0;
  padding: 8px;
  color: ${({ theme }) => theme.colors.white};
  background: ${({ theme }) => theme.colors.primary};
  font-size: 10px;
`;

export const ProductName = styled.button`
  padding: 0;
  border: 0;
  background: transparent;
  font-size: 15px;
  cursor: pointer;
`;

export const ProductMeta = styled.p`
  margin: -4px 0 0;
  color: ${({ theme }) => theme.colors.muted};
  font-size: 12px;
`;

export const PriceAccent = styled.span`
  width: 20px;
  height: 2px;
  background: ${({ theme }) => theme.colors.secondary};
`;

export const ProductPrice = styled.div`
  font-size: 15px;

  strong {
    font-family: 'Inter:Bold', Arial, sans-serif;
    font-size: 26px;
  }

  small {
    display: block;
    margin-top: 5px;
    color: ${({ theme }) => theme.colors.muted};
    font-size: 12px;
  }
`;

export const CardButton = styled(SecondaryButton)`
  width: 100%;
  min-height: 44px;
  margin-top: auto;
  font-size: 13px;
`;

export const Story = styled.section`
  display: grid;
  grid-template-columns: 1.05fr 0.95fr;
  min-height: 510px;
  color: ${({ theme }) => theme.colors.white};
  background: ${({ theme }) => theme.colors.primary};

  img {
    width: 100%;
    height: 100%;
    min-height: 510px;
    object-fit: cover;
  }

  @media (max-width: 760px) {
    grid-template-columns: 1fr;
  }
`;

export const StoryCopy = styled.div`
  display: flex;
  padding: 64px;
  flex-direction: column;
  align-items: flex-start;
  gap: 24px;

  p {
    max-width: 520px;
    margin: 0;
    color: #cdcdcd;
    line-height: 1.5;
  }

  @media (max-width: 720px) {
    padding: 48px 24px;
  }
`;

export const Editorial = styled(Section)`
  display: grid;
  grid-template-columns: minmax(0, 1fr) minmax(400px, 0.9fr);
  align-items: center;
  gap: 80px;

  img {
    width: 100%;
    max-height: 390px;
    object-fit: cover;
  }

  @media (max-width: 820px) {
    grid-template-columns: 1fr;
  }
`;

export const EditorialCopy = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 28px;

  p {
    margin: 0;
    color: ${({ theme }) => theme.colors.muted};
    font-size: 16px;
    line-height: 1.65;
  }
`;

export const CollectionHero = styled(Section)`
  display: grid;
  grid-template-columns: 1fr 548px;
  align-items: center;
  gap: 64px;
  padding-top: 40px;
  padding-bottom: 48px;

  img {
    width: 100%;
    height: 300px;
    object-fit: cover;
  }

  @media (max-width: 860px) {
    grid-template-columns: 1fr;
  }
`;

export const CollectionTitle = styled.h1`
  ${medium};
  margin: 20px 0;
  font-size: clamp(54px, 6vw, 88px);
  line-height: 1.02;
  letter-spacing: -0.045em;
`;

export const CollectionText = styled.p`
  max-width: 510px;
  margin: 0 0 24px;
  color: ${({ theme }) => theme.colors.muted};
  font-size: 17px;
  line-height: 1.6;
`;

export const AccentLine = styled.span`
  display: inline-block;
  width: 24px;
  height: 2px;
  margin-right: 12px;
  vertical-align: middle;
  background: ${({ theme }) => theme.colors.secondary};
`;

export const Assortment = styled(Section)`
  padding-top: 0;
`;

export const Tabs = styled.div`
  display: flex;
  height: 68px;
  align-items: center;
  gap: 32px;
  overflow-x: auto;
  border-top: 1px solid ${({ theme }) => theme.colors.border};
  border-bottom: 1px solid ${({ theme }) => theme.colors.border};
`;

export const Tab = styled.button<{ active?: boolean }>`
  ${medium};
  align-self: stretch;
  padding: 0;
  border: 0;
  border-bottom: 2px solid
    ${({ active, theme }) => (active ? theme.colors.primary : 'transparent')};
  color: ${({ active, theme }) =>
    active ? theme.colors.primary : theme.colors.muted};
  background: transparent;
  font-size: 14px;
  white-space: nowrap;
  cursor: pointer;
`;

export const Filters = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 24px;
  padding: 24px 0 32px;

  @media (max-width: 760px) {
    align-items: flex-start;
    flex-direction: column;
  }
`;

export const FilterSet = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  overflow-x: auto;
`;

export const FilterControl = styled.button`
  height: 42px;
  padding: 0 16px;
  border: 1px solid ${({ theme }) => theme.colors.border};
  background: ${({ theme }) => theme.colors.white};
  font-size: 13px;
  white-space: nowrap;
  cursor: pointer;

  img {
    width: 14px;
    height: 14px;
    margin-left: 20px;
    vertical-align: middle;
  }
`;

export const ProductOverview = styled(Section)`
  padding-top: 28px;
  padding-bottom: 72px;
`;

export const Breadcrumb = styled.div`
  display: flex;
  gap: 12px;
  margin-bottom: 32px;
  color: ${({ theme }) => theme.colors.muted};
  font-size: 12px;
`;

export const ProductDetail = styled.div`
  display: grid;
  grid-template-columns: minmax(420px, 1.2fr) minmax(360px, 0.9fr);
  gap: 72px;

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
  }
`;

export const ProductGallery = styled.div`
  display: grid;
  grid-template-columns: 88px minmax(0, 1fr);
  gap: 16px;

  @media (max-width: 580px) {
    grid-template-columns: 1fr;
  }
`;

export const Thumbnails = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;

  img {
    width: 88px;
    height: 116px;
    border: 1px solid ${({ theme }) => theme.colors.primary};
    object-fit: cover;
  }

  small {
    color: ${({ theme }) => theme.colors.muted};
    font-size: 10px;
    line-height: 1.5;
  }

  @media (max-width: 580px) {
    display: none;
  }
`;

export const MainProductImage = styled.div`
  position: relative;
  min-height: 720px;
  background: #ececea;

  img {
    width: 100%;
    height: 100%;
    min-height: 720px;
    object-fit: cover;
  }

  > span {
    position: absolute;
    top: 20px;
    left: 20px;
    padding: 8px 12px;
    background: ${({ theme }) => theme.colors.white};
    font-size: 10px;
  }

  @media (max-width: 580px) {
    min-height: 520px;

    img {
      min-height: 520px;
    }
  }
`;

export const ZoomButton = styled.button`
  position: absolute;
  right: 20px;
  bottom: 20px;
  display: grid;
  width: 40px;
  height: 40px;
  padding: 10px;
  place-items: center;
  border: 0;
  background: ${({ theme }) => theme.colors.white};
  cursor: pointer;

  img {
    width: 20px;
    height: 20px;
    min-height: 0;
  }
`;

export const Purchase = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

export const ProductTitle = styled.h1`
  ${medium};
  margin: 14px 0 10px;
  font-size: clamp(36px, 4vw, 44px);
  font-weight: 500;
  line-height: 1.12;
  letter-spacing: -0.025em;
`;

export const Muted = styled.p`
  margin: 0;
  color: ${({ theme }) => theme.colors.muted};
  font-size: 13px;
  line-height: 1.6;
`;

export const LargePrice = styled.strong`
  ${semibold};
  font-size: 32px;
`;

export const Divider = styled.hr`
  width: 100%;
  margin: 0;
  border: 0;
  border-top: 1px solid ${({ theme }) => theme.colors.border};
`;

export const Colour = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  font-size: 13px;

  img {
    width: 32px;
    height: 32px;
  }
`;

export const SizeHead = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
`;

export const SizeGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(5, minmax(48px, 1fr));
  gap: 10px;
`;

export const SizeButton = styled.button<{ selected?: boolean }>`
  ${medium};
  min-height: 46px;
  border: 1px solid
    ${({ selected, theme }) =>
      selected ? theme.colors.primary : theme.colors.border};
  color: ${({ selected, theme }) =>
    selected ? theme.colors.white : theme.colors.primary};
  background: ${({ selected, theme }) =>
    selected ? theme.colors.primary : theme.colors.white};
  font-size: 13px;
  cursor: pointer;
`;

export const AddRow = styled.div`
  display: grid;
  grid-template-columns: 120px 1fr;
  gap: 12px;
`;

export const Quantity = styled.div`
  display: grid;
  min-height: 48px;
  grid-template-columns: repeat(3, 1fr);
  align-items: center;
  border: 1px solid ${({ theme }) => theme.colors.border};
  text-align: center;

  button {
    height: 100%;
    border: 0;
    background: transparent;
    font-size: 18px;
    cursor: pointer;
  }

  span {
    font-size: 13px;
  }
`;

export const InfoBlock = styled.div`
  padding: 20px 0;
  border-top: 1px solid ${({ theme }) => theme.colors.border};

  strong {
    ${semibold};
    font-size: 14px;
  }

  p {
    margin: 14px 0 0;
    color: ${({ theme }) => theme.colors.muted};
    font-size: 13px;
    line-height: 1.7;
  }
`;

export const Newsletter = styled.section`
  display: grid;
  grid-template-columns: 1fr minmax(360px, 540px);
  align-items: center;
  gap: 80px;
  padding: 56px 64px;
  background: ${({ theme }) => theme.colors.surface};

  @media (max-width: 800px) {
    grid-template-columns: 1fr;
    padding: 48px 24px;
  }
`;

export const NewsletterCopy = styled.div`
  p {
    margin: 14px 0 0;
    color: ${({ theme }) => theme.colors.muted};
    font-size: 15px;
  }
`;

export const NewsletterForm = styled.form`
  display: grid;
  grid-template-columns: 1fr 180px;
  align-items: end;
  gap: 16px;

  label {
    display: flex;
    flex-direction: column;
    gap: 5px;
    font-family: 'Figma Sans VF:Regular', Arial, sans-serif;
    font-size: 14px;
    font-variation-settings: 'wdth' 100;
  }

  input {
    height: 38px;
    margin-top: 3px;
    padding: 0 12px;
    border: 1px solid #e5e5e5;
    background: ${({ theme }) => theme.colors.white};
  }

  @media (max-width: 520px) {
    grid-template-columns: 1fr;
  }
`;

export const Footer = styled.footer`
  color: ${({ theme }) => theme.colors.white};
  background: ${({ theme }) => theme.colors.primary};
`;

export const FooterDirectory = styled.div`
  display: grid;
  grid-template-columns: minmax(280px, 2fr) repeat(3, 1fr);
  gap: 64px;
  padding: 56px 64px 40px;

  @media (max-width: 800px) {
    grid-template-columns: repeat(2, 1fr);
    padding: 48px 24px 36px;
  }

  @media (max-width: 480px) {
    grid-template-columns: 1fr;
  }
`;

export const FooterLead = styled.div`
  h2 {
    margin: 0;
    font-size: 36px;
    font-weight: 400;
    line-height: 1.1;
  }

  p {
    max-width: 330px;
    margin: 20px 0 0;
    color: ${({ theme }) => theme.colors.soft};
    font-size: 13px;
    line-height: 1.6;
  }
`;

export const FooterColumn = styled.div`
  display: flex;
  flex-direction: column;
  gap: 18px;

  strong {
    ${semibold};
    font-size: 11px;
  }

  button {
    width: fit-content;
    padding: 0;
    border: 0;
    color: #c5c5c5;
    background: transparent;
    font-size: 13px;
    cursor: pointer;
  }
`;

export const FooterBottom = styled.div`
  display: flex;
  min-height: 60px;
  align-items: center;
  justify-content: space-between;
  gap: 20px;
  padding: 16px 64px;
  border-top: 1px solid rgba(255, 255, 255, 0.15);
  color: ${({ theme }) => theme.colors.soft};
  font-size: 11px;

  @media (max-width: 620px) {
    align-items: flex-start;
    flex-direction: column;
    padding: 24px;
  }
`;

export const CartPage = styled(Section)`
  padding-top: 32px;
`;

export const CartIntro = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  gap: 32px;
  margin: 36px 0 48px;

  @media (max-width: 620px) {
    align-items: flex-start;
    flex-direction: column;
  }
`;

export const CartTitle = styled.h1`
  ${medium};
  margin: 14px 0;
  font-size: clamp(56px, 7vw, 88px);
  line-height: 1.05;
  letter-spacing: -0.045em;

  sup {
    margin-left: 12px;
    color: ${({ theme }) => theme.colors.muted};
    font-family: 'Inter:Regular', Arial, sans-serif;
    font-size: 23px;
    font-weight: 400;
    vertical-align: top;
  }
`;

export const CartLayout = styled.div`
  display: grid;
  grid-template-columns: minmax(0, 1fr) 400px;
  gap: 64px;

  @media (max-width: 950px) {
    grid-template-columns: 1fr;
  }
`;

export const CartList = styled.div`
  min-width: 0;
`;

export const CartItem = styled.article<{ compact?: boolean }>`
  display: grid;
  grid-template-columns: ${({ compact }) =>
    compact ? '112px minmax(0, 1fr)' : '160px minmax(0, 1fr) 104px 90px'};
  gap: 20px;
  padding: ${({ compact }) => (compact ? '28px 0' : '24px 0')};
  border-bottom: 1px solid ${({ theme }) => theme.colors.border};

  > img {
    width: ${({ compact }) => (compact ? '112px' : '160px')};
    height: ${({ compact }) => (compact ? '158px' : '216px')};
    object-fit: cover;
  }

  @media (max-width: 680px) {
    grid-template-columns: 100px minmax(0, 1fr);

    > img {
      width: 100px;
      height: 140px;
    }
  }
`;

export const CartItemInfo = styled.div`
  display: flex;
  min-width: 0;
  flex-direction: column;
  justify-content: space-between;
  gap: 16px;

  h3 {
    margin: 0;
    font-size: 18px;
    font-weight: 400;
    line-height: 1.3;
  }

  p {
    margin: 8px 0 0;
    color: ${({ theme }) => theme.colors.muted};
    font-size: 12px;
  }
`;

export const Remove = styled.button`
  width: fit-content;
  padding: 0;
  border: 0;
  color: ${({ theme }) => theme.colors.muted};
  background: transparent;
  font-size: 12px;
  text-decoration: underline;
  cursor: pointer;
`;

export const CartQuantity = styled(Quantity)`
  min-height: 40px;
  align-self: start;
`;

export const CartLinePrice = styled.strong`
  ${medium};
  padding-top: 12px;
  font-size: 16px;
  text-align: right;
`;

export const ShippingNote = styled.div`
  display: flex;
  gap: 14px;
  padding-top: 28px;

  img {
    width: 22px;
    height: 22px;
  }

  strong {
    ${medium};
    display: block;
    font-size: 13px;
  }

  p {
    margin: 6px 0 0;
    color: ${({ theme }) => theme.colors.muted};
    font-size: 12px;
  }
`;

export const SecureNote = styled(Muted)`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;

  img {
    width: 12px;
    height: 14px;
  }
`;

export const Summary = styled.aside`
  display: flex;
  padding: 32px;
  flex-direction: column;
  gap: 24px;
  background: ${({ theme }) => theme.colors.surface};

  h2 {
    margin: 0 0 4px;
    font-size: 28px;
    font-weight: 400;
  }
`;

export const SummaryLine = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 16px;
  color: ${({ theme }) => theme.colors.muted};
  font-size: 14px;

  b {
    color: ${({ theme }) => theme.colors.primary};
    font-weight: 400;
  }
`;

export const SummaryTotal = styled(SummaryLine)`
  align-items: baseline;
  padding-top: 20px;
  border-top: 1px solid ${({ theme }) => theme.colors.border};
  color: ${({ theme }) => theme.colors.primary};

  strong {
    ${medium};
    font-size: 32px;
  }
`;

export const EmptyCart = styled.div`
  padding: 72px 0;
  border-top: 1px solid ${({ theme }) => theme.colors.border};
  border-bottom: 1px solid ${({ theme }) => theme.colors.border};
  color: ${({ theme }) => theme.colors.muted};
  text-align: center;
`;

export const Overlay = styled.div`
  position: fixed;
  z-index: 50;
  inset: 0;
  background: rgba(27, 26, 32, 0.35);
`;

export const Drawer = styled.aside`
  position: fixed;
  z-index: 51;
  top: 0;
  right: 0;
  display: flex;
  width: min(560px, 100%);
  height: 100dvh;
  flex-direction: column;
  overflow-y: auto;
  background: ${({ theme }) => theme.colors.white};
  box-shadow: -12px 0 40px rgba(0, 0, 0, 0.07);
`;

export const DrawerHead = styled.div`
  padding: 28px 32px;
  border-bottom: 1px solid ${({ theme }) => theme.colors.border};
`;

export const DrawerTitle = styled(CartTitle)`
  font-size: 56px;
`;

export const DrawerToolbar = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Close = styled.button`
  width: 32px;
  height: 32px;
  padding: 0;
  border: 0;
  background: transparent url('/assets/859f6.svg') center / 32px 32px no-repeat;
  cursor: pointer;
`;

export const DrawerBody = styled.div`
  flex: 1;
  padding: 0 32px;
`;

export const DrawerSummary = styled.div`
  display: flex;
  padding: 28px 32px;
  flex-direction: column;
  gap: 20px;
  border-top: 1px solid ${({ theme }) => theme.colors.border};
  background: ${({ theme }) => theme.colors.surface};
`;
