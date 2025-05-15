import React, { forwardRef } from 'react';
import '@craftily/ui/card';

interface CardProps extends React.HTMLAttributes<HTMLElement> {}
interface CardTitleProps extends CardProps {}
interface CardBodyProps extends CardProps {}
interface CardActionsProps extends CardProps {}
interface CardHeaderProps extends CardProps {}
interface CardFooterProps extends CardProps {}

const CardTitle = forwardRef<HTMLElement, CardTitleProps>((props, ref) => {
  const { className, children, ...rest } = props;
  return React.createElement(
    'craftily-card-title',
    {
      ref,
      class: className,
      ...rest,
    },
    children
  );
});

const CardBody = forwardRef<HTMLElement, CardBodyProps>((props, ref) => {
  const { className, children, ...rest } = props;
  return React.createElement(
    'craftily-card-body',
    {
      ref,
      class: className,
      ...rest,
    },
    children
  );
});

const CardActions = forwardRef<HTMLElement, CardActionsProps>((props, ref) => {
  const { className, children, ...rest } = props;
  return React.createElement(
    'craftily-card-actions',
    {
      ref,
      class: className,
      ...rest,
    },
    children
  );
});

const CardHeader = forwardRef<HTMLElement, CardHeaderProps>((props, ref) => {
  const { className, children, ...rest } = props;
  return React.createElement(
    'craftily-card-header',
    {
      ref,
      class: className,
      ...rest,
    },
    children
  );
});

const CardFooter = forwardRef<HTMLElement, CardFooterProps>((props, ref) => {
  const { className, children, ...rest } = props;
  return React.createElement(
    'craftily-card-footer',
    {
      ref,
      class: className,
      ...rest,
    },
    children
  );
});

const CardComponent = forwardRef<HTMLElement, CardProps>((props, ref) => {
  const { className, children, ...rest } = props;
  return React.createElement(
    'craftily-card',
    {
      ref,
      class: className,
      ...rest,
    },
    children
  );
});

type CardComponent = typeof CardComponent & {
  Title: typeof CardTitle;
  Body: typeof CardBody;
  Actions: typeof CardActions;
  Header: typeof CardHeader;
  Footer: typeof CardFooter;
};

export const Card = Object.assign(CardComponent, {
  Title: CardTitle,
  Body: CardBody,
  Actions: CardActions,
  Header: CardHeader,
  Footer: CardFooter,
}) as CardComponent;

export default Card;
