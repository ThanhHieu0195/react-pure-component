import { HeadingWrapper } from "./StyledHeading";

interface HeadingProps {
  title: string;
}
const Heading = function ({ title }: HeadingProps) {
  return <HeadingWrapper>{title}</HeadingWrapper>;
};
export default Heading;
