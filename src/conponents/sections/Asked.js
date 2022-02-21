import React from "react";

const Asked = () => {
  const data = [
    {
      title: "Representative Example",
      content: `If you borrowed $2,000 over a 12 month period and the loan had a 3% origination fee ($60), your monthly repayments would be $189.12, with a total payback amount of $2269.44 which including the 3% fee paid from the loan amount, would have a total cost of $329.44. Representative 29.82% APR.
      If you borrowed $5,000 over a 48 month period and the loan had an 8% origination fee ($400), your monthly repayments would be $131.67, with a total payback amount of $6320.12 which including the 8% fee paid from the loan amount, would have a total cost of $1720.12. Representative 18.23% APR.`,
    },
    {
      title: "Important acknowledgment – please read!",
      content:
        "The following statement provides information about General Loans, APR, Loan Resumptions and Loan Payment Terms. Please read it carefully.",
    },
    {
      title: "Are there any fees?",
      content:
        "OppLoans.com services will always be provided free of charge, but that is not to say that the lender will give you a loan for free. Your lender will charge you fees and/or interest and must provide you with full disclosure of their loan terms upon approval. It is then your responsibility to read through the terms before signing your loan agreement.",
    },
    {
      title: "What if i need to make a late payment?",
      content:
        "Late Payment penalties differ from lender to lender. Lenders may be forgiving if you contact them directly, though some may automatically add a fee if it is in their agreement. For more information, please contact the lender directly if you have any issues repaying your loan.",
    },
    {
      title: "When do i repay the loan?",
      content:
        "Loan repayment terms differ by lender. Thus, it is important to check the loan agreement from your lender for information on the lender's repayment terms.",
    },
    {
      title: "Important customer information",
      content:
        "Personal loans differ from other types of loans, such as home mortgages or automobile loans. Specifically, personal loans allow you to spend your money in a number of different ways, whether it's to help pay off medical expenses, make home improvements, repairs to your vehicle or consolidate your debts. A personal loan is paid back to the lender over a set period of time. Fill out the form and see just how much money you can borrow from the comfort of your own home. It's as easy as that!",
    },
    {
      title: "What is a personal loan for?",
      content:
        "People get personal loans to help with home repairs, unexpected expenses, holiday shopping, and more. A loan from one of our lenders can help you get the funds you need! Just fill out our Online Form. Follow the short process and if you are approved, receive your cash loan!",
    },
    {
      title: "Apr information",
      content:
        "Annual Percentage Rate (APR) is a measure of the cost of credit, expressed as a nominal yearly rate. It relates to the amount and timing of value received by the consumer to the amount and timing of payments made. OppLoans.com cannot guarantee any APR since we are not a lender ourselves. An APR can generally run between 5.99% up to 35.99%. Loan products general have a 61-day minimum repayment term and a 72-month maximum repayment term. Before accepting a loan from a lender within our network, please read the loan agreement carefully as the APR and repayment terms may differ from what is listed on this site.",
    },
  ];
  const Accordion = ({ title, children }) => {
    const [isOpen, setOpen] = React.useState(false);
    return (
      <div className="aq_box">
        <div
          className={`aq_box_item ${!isOpen ? "" : "active"}`}
          onClick={() => setOpen(!isOpen)}
        >
          <p>{title}</p>
        </div>
        <div className={`aq_box_item_content ${!isOpen ? "active" : ""}`}>
          <div className="aq_content">{children}</div>
        </div>
      </div>
    );
  };
  return (
    <div className="ask">
      <h2 className="ask_title">Frequently Asked Questions</h2>
      <div className="aq_box">
        {data &&
          data.map((item, key) => (
            <Accordion key={key} title={item.title}>
              {item.content}
            </Accordion>
          ))}
      </div>
    </div>
  );
};

export default Asked;
