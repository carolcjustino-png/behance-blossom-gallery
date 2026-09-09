import { Instagram, Linkedin, Mail } from "lucide-react";

const BEHANCE = "https://www.behance.net/carolcjustino";

function BehanceIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M9.1 6.5c1.1 0 1.9.1 2.6.4.6.2 1.1.5 1.5.9.4.4.7.8.8 1.3.2.5.3 1 .3 1.6 0 .7-.2 1.3-.5 1.8-.3.5-.8.9-1.4 1.2.9.2 1.5.7 1.9 1.3.4.6.6 1.4.6 2.3 0 .7-.1 1.3-.4 1.9-.3.5-.7 1-1.1 1.3-.5.4-1.1.6-1.7.8-.6.2-1.3.3-2 .3H1V6.5h8.1Zm-.5 6c.6 0 1-.1 1.4-.4.4-.3.5-.7.5-1.3 0-.3 0-.6-.2-.8a1 1 0 0 0-.5-.5c-.2-.1-.4-.2-.7-.2-.3 0-.6-.1-.9-.1H4.3v3.3h4.3Zm.2 6.3c.3 0 .6 0 .9-.1.3 0 .5-.1.8-.3.2-.1.4-.3.5-.6.1-.2.2-.6.2-1s-.1-1.1-.5-1.4c-.4-.3-.9-.5-1.6-.5H4.3v3.9h4.5ZM18.6 18.7c.4.4 1.1.7 2 .7.6 0 1.2-.2 1.7-.5.4-.3.7-.7.8-1h2.2c-.3 1.2-.9 2-1.7 2.6-.8.5-1.8.8-2.9.8-.8 0-1.5-.1-2.2-.4-.6-.3-1.2-.6-1.6-1.1-.5-.5-.8-1.1-1-1.7-.3-.7-.4-1.4-.4-2.2 0-.8.1-1.5.4-2.2.2-.7.6-1.2 1.1-1.7.5-.5 1-.9 1.6-1.1.6-.3 1.4-.4 2.1-.4.9 0 1.7.2 2.3.5.7.4 1.2.8 1.6 1.4.4.6.7 1.2.9 2 .2.7.2 1.5.2 2.3h-7.5c0 .8.3 1.6.7 2h-.3Zm3.6-5.5c-.4-.4-1-.6-1.7-.6-.5 0-.9.1-1.2.3-.3.1-.6.4-.8.6-.2.2-.3.5-.4.8 0 .2-.1.5-.1.7h4.7c-.1-.8-.3-1.4-.6-1.8h.1ZM17 7.7h5.8v1.4H17V7.7Z" />
    </svg>
  );
}

function PinterestIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M12 2a10 10 0 0 0-3.6 19.3c-.1-.8-.2-2 0-2.9l1.2-5.1s-.3-.6-.3-1.5c0-1.4.8-2.5 1.9-2.5.9 0 1.3.7 1.3 1.5 0 .9-.6 2.2-.9 3.5-.3 1 .5 1.9 1.6 1.9 1.9 0 3.3-2 3.3-4.9 0-2.6-1.8-4.4-4.4-4.4-3 0-4.8 2.2-4.8 4.6 0 .9.3 1.8.8 2.4.1.1.1.2.1.3l-.3 1.1c0 .2-.1.2-.3.1-1.3-.6-2.1-2.5-2.1-4 0-3.3 2.4-6.3 6.9-6.3 3.6 0 6.4 2.6 6.4 6 0 3.6-2.2 6.5-5.4 6.5-1 0-2-.6-2.4-1.2l-.6 2.5c-.2.9-.8 2-1.2 2.7A10 10 0 1 0 12 2Z" />
    </svg>
  );
}

const links = [
  { label: "Behance", href: BEHANCE, Icon: BehanceIcon },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/carolcjustino", Icon: Linkedin },
  { label: "Instagram", href: "https://instagram.com/carolcjustino", Icon: Instagram },
  { label: "Pinterest", href: "https://pinterest.com/carolcjustino", Icon: PinterestIcon },
  { label: "E-mail", href: "mailto:contato@carolcjustino.art", Icon: Mail },
];

export function SocialLinks({ className = "" }: { className?: string }) {
  return (
    <ul className={`flex items-center gap-3 ${className}`}>
      {links.map(({ label, href, Icon }) => (
        <li key={label}>
          <a
            href={href}
            target={href.startsWith("mailto:") ? undefined : "_blank"}
            rel="noreferrer"
            aria-label={label}
            className="flex size-9 items-center justify-center rounded-full bg-primary text-primary-foreground transition-colors duration-300 hover:bg-accent hover:text-accent-foreground"
          >
            <Icon className="size-4" />
          </a>
        </li>
      ))}
    </ul>
  );
}
