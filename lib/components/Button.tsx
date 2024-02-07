import { tv } from 'tailwind-variants';

const buttonVariants = tv({
  base: 's-ui-text-gray7 s-ui-text-h1b',
});

export default function Button(
  props: React.ButtonHTMLAttributes<HTMLButtonElement>,
) {
  return <button className={buttonVariants({})} {...props} />;
}
