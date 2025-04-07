export default function Product() {
  const products = [
    {
      id: 1,
      name: "ERP (Enterprise Resource Planning)",
      description:
        "A comprehensive software solution that integrates core business processes, improving efficiency, automation, and real-time decision-making.",
      image: "/src/images/erp.jpg", // Corrected path
    },
    {
      id: 2,
      name: "HRMS (Human Resource Management System)",
      description:
        "Streamline HR operations with automated payroll, employee management, attendance tracking, and performance evaluation.",
      image: "/src/images/hrms.jpeg", // Corrected path
    },
    {
      id: 3,
      name: "CRM (Customer Relationship Management)",
      description:
        "Enhance customer relationships with lead tracking, automated follow-ups, and personalized engagement for better sales growth.",
      image: "/src/images/crm.jpg", // Corrected path
    },
    {
      id: 4,
      name: "Billing Software",
      description:
        "Simplify invoicing, payments, and financial tracking with a user-friendly billing system tailored for businesses of all sizes.",
      image: "/src/images/billing.jpg", // Corrected path
    },
    {
      id: 5,
      name: "Inventory Software",
      description:
        "Efficiently manage stock levels, track product movement, and automate supply chain processes to reduce losses and improve productivity.",
      image: "/src/images/inventory.jpg", // Corrected path
    },
    {
      id: 6,
      name: "Banking Software",
      description:
        "A secure and scalable banking solution for managing transactions, loan processing, customer accounts, and compliance requirements.",
      image: "/src/images/banking.jpg", // Corrected path
    },
  ];

  return (
    <div className="p-6">
      <h1 className="text-5xl text-[#f86a04] font-extralight italic  text-start mb-8">
        Our Software <br /> <span className="text-black ">Solutions</span>
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {products.map((product) => (
          <div
            key={product.id}
            className="bg-white rounded-2xl shadow-lg p-4 text-center hover:shadow-xl transition"
          >
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-40 object-cover rounded-lg mb-4"
            />
            <h2 className="text-lg font-semibold">{product.name}</h2>
            <p className="text-gray-500 text-sm mb-3">{product.description}</p>
           
          </div>
        ))}
      </div>
    </div>
  );
}
