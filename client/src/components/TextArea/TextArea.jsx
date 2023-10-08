import React from "react";
import { Container } from "./styles-textarea";

export function TextArea({ value, ...rest }) {
  return( <Container {...rest}>
    {value}
    </Container>
  );
}
