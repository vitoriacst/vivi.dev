import { Code, Mail, MessageCircle } from 'lucide-react';

export const Contact = () => {
  return (
    <div className="flex items-center justify-center flex-col gap-2 mt-2">
      <section className="flex gap-2">
        <a
          href={'https://www.linkedin.com/in/vitoria-cstholanda/'}
          target="_blank"
          className="flex gap-2 border-2 p-1 rounded-sm transition-transform duration-300 ease-in-out hover:-translate-y-1 hover:shadow-lg"
        >
          <MessageCircle />
          Linkedin
        </a>
        <a
          href={'vitoria.cst.holanda@gmail.com'}
          target="_blank"
          className="flex gap-2 border-2 p-1 rounded-sm transition-transform duration-300 ease-in-out hover:-translate-y-1 hover:shadow-lg"
        >
          <Mail />
          Email
        </a>
        <a
          href={'https://www.linkedin.com/in/vitoria-cstholanda/'}
          target="_blank"
          className="flex gap-2 border-2 p-1 rounded-sm transition-transform duration-300 ease-in-out hover:-translate-y-1 hover:shadow-lg"
        >
          <Code />
          Github
        </a>
      </section>
    </div>
  );
};
