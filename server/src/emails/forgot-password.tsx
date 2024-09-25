import { Body, Button, Container, Heading, Html, Section, Tailwind, Text } from "@react-email/components";

interface ForgotPasswordProps {
  url: string;
}

export default function ForgotPassword({url}: ForgotPasswordProps) {
  return (
    <Html lang="en">
      <Tailwind>
        <Body className="bg-white my-auto mx-auto font-sans">
          <Container className="border border-solid border-gray-100 rounded my-[40px] mx-auto p-[20px] w-[465px]">
            <Heading className="text-black  text-xl font-bold text-center p-0 my-[30px] mx-0">
              Forgot Password
            </Heading>
            <Section className="text-center mt-[32px] mb-[32px]">
              <Button
                className="bg-blue-500 px-6 py-2 rounded text-white text-[12px] font-semibold no-underline text-center"
                href={url}
              >
                Reset Password
              </Button>
            </Section>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
}
