import type { Metadata } from 'next'
export const metadata: Metadata = {
  title: 'Política de Privacidade'
}
const Cookies: React.FC = () => {
  return (
    <main className="w-screen h-auto bg-zinc-900">
      <section className='pt-24 flex justify-center items-center align-middle'>
        <div className=" py-8 px-[35rem] rounded-lg text-xl text-white text-pretty leading-10">
          <h2 className="text-4xl font-bold mb-8">Política de Privacidade</h2>
          <p className=''>
            Esta Política de Privacidade tem o propósito de descrever detalhadamente como coletamos, utilizamos e protegemos as informações pessoais que você compartilha conosco ao utilizar nosso site (sonnensoftware.com) e nossos aplicativos desktop e móveis.
          </p>
          <p className=''>
            <strong>1. Informações Coletadas</strong>
          </p>
          <p className=''>
            Ao utilizar nossos serviços, podemos coletar as seguintes informações:
          </p>
          <ul className="list-disc ml-8">
            <li className=''>Informações de identificação pessoal, como nome, endereço de e-mail e número de telefone, quando fornecidas voluntariamente por você.</li>
            <li className=''>Informações de sessão, como cookies, com o objetivo de aprimorar a experiência do usuário e facilitar a navegação em nosso site e aplicativos.</li>
          </ul>
          <p className=''>
            <strong>2. Utilização das Informações Coletadas</strong>
          </p>
          <p className=''>
            As informações coletadas são utilizadas para os seguintes propósitos:
          </p>
          <ul className="list-disc ml-8">
            <li className=''>Personalização da sua experiência no site e nos aplicativos.</li>
            <li className=''>Manutenção da sua sessão ativa e fornecimento de acesso a recursos exclusivos.</li>
            <li className=''>Aprimoramento contínuo de nossos produtos e serviços com base no feedback recebido.</li>
            <li className=''>Envio de atualizações, newsletters ou informações sobre nossos produtos e serviços, sempre com seu consentimento.</li>
          </ul>
          <p className=''>
            <strong>3. Cookies e Tecnologias Semelhantes</strong>
          </p>
          <p className=''>
            Utilizamos cookies e tecnologias similares para aprimorar a experiência do usuário. Você pode gerenciar as preferências de cookies por meio das configurações do seu navegador.
          </p>
          <p className=''>
            <strong>4. Compartilhamento de Informações</strong>
          </p>
          <p className=''>
            Suas informações pessoais não são compartilhadas com terceiros, a menos que seja necessário para fornecer os serviços solicitados por você ou conforme exigido por lei.
          </p>
          <p className=''>
            <strong>5. Segurança das Informações</strong>
          </p>
          <p className=''>
            Implementamos medidas de segurança para proteger suas informações contra acesso não autorizado ou divulgação.
          </p>
          <p className=''>
            <strong>6. Links para Outros Sites</strong>
          </p>
          <p className=''>
            Nosso site pode conter links para outros sites. Não nos responsabilizamos pelas práticas de privacidade desses sites e recomendamos que você revise suas políticas de privacidade.
          </p>
          <p className=''>
            <strong>7. Menores de Idade</strong>
          </p>
          <p className=''>
            Nossos serviços não são destinados a menores de 18 anos. Não coletamos intencionalmente informações de menores. Se tivermos conhecimento de que coletamos informações de um menor, tomaremos as medidas necessárias para excluí-las.
          </p>
          <p className=''>
            <strong>8. Alterações na Política de Privacidade</strong>
          </p>
          <p className=''>
            Reservamo-nos o direito de atualizar esta Política de Privacidade periodicamente. Recomendamos que você reveja regularmente para estar ciente de quaisquer alterações.
          </p>
          <p className=''>
            <strong>9. Contato</strong>
          </p>
          <p className=''>
            Se tiver dúvidas sobre esta Política de Privacidade, entre em contato conosco através do e-mail <span className='text-red-600'>sonnensoftware@outlook.com</span>.
          </p>
          <p className=''>
            Ao utilizar nosso site e serviços, você concorda com os termos desta Política de Privacidade.
          </p>
          <p className=''>Esta Política de Cookies é válida a partir de 1 de janeiro de 2024.</p>
        </div>
      </section>
    </main>
  );
};

export default Cookies;