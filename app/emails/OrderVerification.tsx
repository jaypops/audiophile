import {
  Body,
  Button,
  Container,
  Head,
  Heading,
  Hr,
  Html,
  Img,
  Link,
  Preview,
  Section,
  Text,
  Row,
  Column,
} from "@react-email/components";

interface OrderData {
  _id: string;
  _creationTime: number;
  orderId: string;
  name: string;
  email: string;
  phone: string;
  address: string;
  city: string;
  zipCode: string;
  country: string;
  paymentMethod: string;
  eMoneyNumber?: string;
  eMoneyPIN?: string;
  cartItems: Array<{
    id: number;
    name: string;
    price: number;
    quantity: number;
    image: {
      desktop: string;
      tablet: string;
      mobile: string;
    };
  }>;
  subtotal: number;
  shipping: number;
  vat: number;
  grandTotal: number;
  orderDate: string;
  status?: string;
}

interface OrderVerificationEmailProps {
  order: OrderData;
  verificationLink?: string;
}

export default function OrderVerificationEmail({
  order,
  verificationLink,
}: OrderVerificationEmailProps) {
  const formatDate = (isoDate: string) => {
    const date = new Date(isoDate);
    return date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  const getProductImage = (imageObj: OrderData["cartItems"][0]["image"]) => {

    const baseUrl = "https://your-domain.com";
    return imageObj.desktop.startsWith("http")
      ? imageObj.desktop
      : `${baseUrl}/${imageObj.desktop}`;
  };

  return (
    <Html>
      <Head />
      <Preview>Verify your email and confirm your order #{order.orderId}</Preview>
      <Body style={main}>
        <Container style={container}>
          <Section style={logoSection}>
            <Heading style={logo}>audiophile</Heading>
          </Section>

          <Section style={verificationBanner}>
            <Heading style={verificationHeading}>
              Verify Your Email Address
            </Heading>
            <Text style={verificationText}>
              Please verify your email address to confirm your order and receive
              updates.
            </Text>
            {verificationLink && (
              <Button style={verifyButton} href={verificationLink}>
                Verify Email Address
              </Button>
            )}
          </Section>

          {/* Order Confirmation */}
          <Section style={orderSection}>
            <Heading style={heading}>Thank You for Your Order!</Heading>
            <Text style={paragraph}>
              Hi {order.name}, we've received your order and will send you a
              shipping confirmation email as soon as your order ships.
            </Text>
          </Section>

          <Hr style={hr} />

          {/* Order Details */}
          <Section style={infoSection}>
            <Row>
              <Column>
                <Text style={infoLabel}>Order Number</Text>
                <Text style={infoValue}>{order.orderId}</Text>
              </Column>
              <Column align="right">
                <Text style={infoLabel}>Order Date</Text>
                <Text style={infoValue}>{formatDate(order.orderDate)}</Text>
              </Column>
            </Row>
          </Section>

          <Hr style={hr} />

          {/* Order Items */}
          <Section style={itemsSection}>
            <Heading style={sectionHeading}>Order Summary</Heading>
            {order.cartItems.map((item) => (
              <Row key={item.id} style={itemRow}>
                <Column style={itemImageColumn}>
                  <Img
                    src={getProductImage(item.image)}
                    alt={item.name}
                    width="64"
                    height="64"
                    style={itemImage}
                  />
                </Column>
                <Column style={itemDetailsColumn}>
                  <Text style={itemName}>{item.name}</Text>
                  <Text style={itemQuantity}>Qty: {item.quantity}</Text>
                </Column>
                <Column align="right" style={itemPriceColumn}>
                  <Text style={itemPrice}>
                    ${(item.price * item.quantity).toLocaleString()}
                  </Text>
                </Column>
              </Row>
            ))}
          </Section>

          <Hr style={hr} />

          {/* Price Breakdown */}
          <Section style={totalsSection}>
            <Row style={totalRow}>
              <Column>
                <Text style={totalLabel}>Subtotal</Text>
              </Column>
              <Column align="right">
                <Text style={totalValue}>${order.subtotal.toLocaleString()}</Text>
              </Column>
            </Row>
            <Row style={totalRow}>
              <Column>
                <Text style={totalLabel}>Shipping</Text>
              </Column>
              <Column align="right">
                <Text style={totalValue}>${order.shipping.toLocaleString()}</Text>
              </Column>
            </Row>
            <Row style={totalRow}>
              <Column>
                <Text style={totalLabel}>VAT (included)</Text>
              </Column>
              <Column align="right">
                <Text style={totalValue}>${order.vat.toLocaleString()}</Text>
              </Column>
            </Row>
            <Row style={grandTotalRow}>
              <Column>
                <Text style={grandTotalLabel}>Grand Total</Text>
              </Column>
              <Column align="right">
                <Text style={grandTotalValue}>
                  ${order.grandTotal.toLocaleString()}
                </Text>
              </Column>
            </Row>
          </Section>

          <Hr style={hr} />

          {/* Shipping Address */}
          <Section style={addressSection}>
            <Heading style={sectionHeading}>Shipping Address</Heading>
            <Text style={addressText}>
              {order.name}
              <br />
              {order.address}
              <br />
              {order.city}, {order.zipCode}
              <br />
              {order.country}
            </Text>
          </Section>

          {/* Payment Method */}
          <Section style={addressSection}>
            <Heading style={sectionHeading}>Payment Method</Heading>
            <Text style={addressText}>
              {order.paymentMethod}
              {order.paymentMethod === "e-Money" && order.eMoneyNumber && (
                <>
                  <br />
                  e-Money Number: ****{order.eMoneyNumber.slice(-4)}
                </>
              )}
            </Text>
          </Section>

          <Hr style={hr} />

          {/* Footer */}
          <Section style={footer}>
            <Text style={footerText}>
              If you have any questions, please contact us at{" "}
              <Link href="mailto:support@audiophile.com" style={link}>
                support@audiophile.com
              </Link>
            </Text>
            <Text style={footerText}>
              This email was sent to{" "}
              <Link href={`mailto:${order.email}`} style={link}>
                {order.email}
              </Link>
            </Text>
            <Text style={footerCopyright}>
              © 2025 Audiophile. All rights reserved.
            </Text>
          </Section>
        </Container>
      </Body>
    </Html>
  );
}

// Styles
const main = {
  backgroundColor: "#f6f9fc",
  fontFamily:
    '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Ubuntu,sans-serif',
};

const container = {
  backgroundColor: "#ffffff",
  margin: "0 auto",
  padding: "20px 0 48px",
  marginBottom: "64px",
  maxWidth: "600px",
};

const logoSection = {
  padding: "32px 40px",
  textAlign: "center" as const,
};

const logo = {
  color: "#000000",
  fontSize: "28px",
  fontWeight: "bold",
  margin: "0",
  textTransform: "lowercase" as const,
  letterSpacing: "2px",
};

const verificationBanner = {
  backgroundColor: "#D87D4A",
  padding: "32px 40px",
  textAlign: "center" as const,
};

const verificationHeading = {
  color: "#ffffff",
  fontSize: "24px",
  fontWeight: "bold",
  margin: "0 0 16px",
};

const verificationText = {
  color: "#ffffff",
  fontSize: "16px",
  lineHeight: "24px",
  margin: "0 0 24px",
};

const verifyButton = {
  backgroundColor: "#000000",
  borderRadius: "4px",
  color: "#ffffff",
  fontSize: "16px",
  fontWeight: "bold",
  textDecoration: "none",
  textAlign: "center" as const,
  display: "inline-block",
  padding: "12px 32px",
  letterSpacing: "1px",
};

const orderSection = {
  padding: "32px 40px 0",
};

const heading = {
  fontSize: "28px",
  fontWeight: "bold",
  margin: "0 0 16px",
  color: "#000000",
};

const sectionHeading = {
  fontSize: "18px",
  fontWeight: "bold",
  margin: "0 0 16px",
  color: "#000000",
};

const paragraph = {
  fontSize: "16px",
  lineHeight: "24px",
  margin: "0",
  color: "#525252",
};

const hr = {
  borderColor: "#e6ebf1",
  margin: "24px 40px",
};

const infoSection = {
  padding: "0 40px",
};

const infoLabel = {
  fontSize: "12px",
  fontWeight: "600",
  color: "#8898aa",
  textTransform: "uppercase" as const,
  margin: "0 0 4px",
  letterSpacing: "0.5px",
};

const infoValue = {
  fontSize: "16px",
  fontWeight: "600",
  color: "#000000",
  margin: "0",
};

const itemsSection = {
  padding: "0 40px",
};

const itemRow = {
  marginBottom: "16px",
};

const itemImageColumn = {
  width: "64px",
  paddingRight: "16px",
};

const itemImage = {
  borderRadius: "8px",
  objectFit: "cover" as const,
};

const itemDetailsColumn = {
  verticalAlign: "middle" as const,
};

const itemName = {
  fontSize: "14px",
  fontWeight: "600",
  color: "#000000",
  margin: "0 0 4px",
};

const itemQuantity = {
  fontSize: "14px",
  color: "#8898aa",
  margin: "0",
};

const itemPriceColumn = {
  verticalAlign: "middle" as const,
};

const itemPrice = {
  fontSize: "16px",
  fontWeight: "600",
  color: "#000000",
  margin: "0",
};

const totalsSection = {
  padding: "0 40px",
};

const totalRow = {
  marginBottom: "8px",
};

const totalLabel = {
  fontSize: "14px",
  color: "#525252",
  margin: "0",
};

const totalValue = {
  fontSize: "14px",
  color: "#000000",
  margin: "0",
};

const grandTotalRow = {
  marginTop: "16px",
};

const grandTotalLabel = {
  fontSize: "16px",
  fontWeight: "600",
  color: "#000000",
  margin: "0",
  textTransform: "uppercase" as const,
  letterSpacing: "0.5px",
};

const grandTotalValue = {
  fontSize: "18px",
  fontWeight: "bold",
  color: "#D87D4A",
  margin: "0",
};

const addressSection = {
  padding: "0 40px",
};

const addressText = {
  fontSize: "14px",
  lineHeight: "22px",
  color: "#525252",
  margin: "0",
};

const footer = {
  padding: "24px 40px",
  textAlign: "center" as const,
};

const footerText = {
  fontSize: "12px",
  lineHeight: "20px",
  color: "#8898aa",
  margin: "0 0 8px",
};

const link = {
  color: "#D87D4A",
  textDecoration: "none",
};

const footerCopyright = {
  fontSize: "12px",
  color: "#8898aa",
  margin: "16px 0 0",
};