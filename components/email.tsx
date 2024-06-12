import * as React from "react";

interface Template {
  firstName: string;
}

export const Email: React.FC<Readonly<Template>> = ({
  firstName,
}) => (
  <div>
  </div>
);

export default Email;
