import { Card, UnstyledLink } from "components/atoms/Card/Card.styles";
import Link from "next/link";
import React from "react";

export default function CardLink({ to, title }) {
  return (
    <Link href={to} passHref>
      <UnstyledLink>
        <Card>{title}</Card>
      </UnstyledLink>
    </Link>
  );
}
