import { Container as Content } from "semantic-ui-react";
import './Container.scss';

interface ContainerProps {
  children: React.ReactNode;
}
export default function Container({ children }: ContainerProps) {
  return (
    <div className="container-bg">
      <Content>{children}</Content>
    </div>
  );
}
