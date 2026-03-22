import Image from "next/image"

export default function MyJobPortfolioPage() {
  return (
    <main className="min-h-screen">
      <header className="w-full px-2 py-4 max-w-full mx-auto">
        <h1 className="text-2xl font-semibold transform hover:scale-105 transition-transform duration-200">
          Job Portfolio
        </h1>
        <p className="text-sm text-muted-foreground">Selected projects with screenshots and short descriptions.</p>
        <hr className="mt-2" />
      </header>

      <div className="flex flex-col gap-4 p-0 m-0.5 md:flex-row">
        <div className="w-full rounded-lg bg-white p-4 shadow md:w-[50%]">
          <article className="mt-4 mb-4 rounded-lg bg-white p-4 shadow border-2 border-gray-500/20 transform hover:scale-105 transition-transform duration-200">
            <h2 className="mb-2 text-xl font-semibold">
              1. Hotel Guest Reservation, Registration, Billing and Collection System
            </h2>
            <p className="mb-2 text-sm text-gray-700">
              A python web app developed in Odoo 19 Community Edition and PostgreSQL. It is used by the hotel concierge
              to reserve rooms, accept guests, make regular room bills, and collect guest payments.
            </p>
            <p className="mb-2 text-sm text-gray-700">
              <span className="font-semibold">My Role:</span> Sole Full Stack Developer
            </p>

            <section className="mt-2 mb-2 rounded-lg bg-white p-4 shadow border-2 border-gray-500/20">
              <h3 className="mt-1 mb-2">The Hotel System</h3>
              <Image
                src="/assets/HotelMenu.JPG"
                alt="The Hotel System"
                width={1200}
                height={800}
                sizes="(max-width: 768px) 100vw, 50vw"
                className="mt-1 mb-1 h-auto w-full rounded-lg border-2"
              />
            </section>

            <section className="mt-2 mb-2 rounded-lg bg-white p-4 shadow border-2 border-gray-500/20">
              <h3 className="mt-1 mb-2">The Guest Registration Page (Anonymized)</h3>
              <Image
                src="/assets/HotelGRC.JPG"
                alt="The Guest Registration Page (Anonymized)"
                width={1200}
                height={800}
                sizes="(max-width: 768px) 100vw, 50vw"
                className="mt-1 mb-1 h-auto w-full rounded-lg border-2"
              />
            </section>

            <section className="mt-2 mb-2 rounded-lg bg-white p-4 shadow border-2 border-gray-500/20">
              <h3 className="mt-1 mb-2">The Guest Bill (Anonymized)</h3>
              <Image
                src="/assets/GuestBill.JPG"
                alt="The Guest Bill (Anonymized)"
                width={1200}
                height={800}
                sizes="(max-width: 768px) 100vw, 50vw"
                className="mt-1 mb-1 h-auto w-full rounded-lg border-2"
              />
            </section>

            <section className="mt-2 mb-2 rounded-lg bg-white p-4 shadow border-2 border-gray-500/20">
              <h3 className="mt-1 mb-2">The Guest Bill Report (Anonymized)</h3>
              <Image
                src="/assets/GuestBillpdf.JPG"
                alt="The Guest Bill Report (Anonymized)"
                width={1200}
                height={800}
                sizes="(max-width: 768px) 100vw, 50vw"
                className="mt-1 mb-1 h-auto w-full rounded-lg border-2"
              />
            </section>
          </article>

          <article className="mt-4 mb-4 rounded-lg bg-white p-4 shadow border-2 border-gray-500/20 transform hover:scale-105 transition-transform duration-200">
            <h2 className="mb-2 text-xl font-semibold">2. Student Registration, Billing and Collection System</h2>
            <p className="mb-2 text-sm text-gray-700">
              The revenue component of a school management system used to generate student bills upon enrollment, collect
              payments, and make corresponding adjustments for discounts and scholarships. It generates student
              registration summaries and cash collection and adjustments. The database backend is MS SQL server.
            </p>
            <p className="mb-2 text-sm text-gray-700">
              <span className="font-semibold">My Role:</span> Sole Developer
            </p>

            <section className="mt-2 mb-2 rounded-lg bg-white p-4 shadow border-2 border-gray-500/20">
              <h3 className="mt-1 mb-2">The Student Registration (Anonymized)</h3>
              <Image
                src="/assets/StudentRegistration.JPG"
                alt="The Student Registration (Anonymized)"
                width={1200}
                height={800}
                sizes="(max-width: 768px) 100vw, 50vw"
                className="mt-1 mb-1 h-auto w-full rounded-lg border-2"
              />
            </section>

            <section className="mt-2 mb-2 rounded-lg bg-white p-4 shadow border-2 border-gray-500/20">
              <h3 className="mt-1 mb-2">The Student Ledger (Anonymized)</h3>
              <Image
                src="/assets/StudentLedger.JPG"
                alt="The Student Ledger (Anonymized)"
                width={1200}
                height={800}
                sizes="(max-width: 768px) 100vw, 50vw"
                className="mt-1 mb-1 h-auto w-full rounded-lg border-2"
              />
            </section>

            <section className="mt-2 mb-2 rounded-lg bg-white p-4 shadow border-2 border-gray-500/20">
              <h3 className="mt-1 mb-2">The Student Master List (Anonymized)</h3>
              <Image
                src="/assets/StudentMasterList.JPG"
                alt="The Student Master List (Anonymized)"
                width={1200}
                height={800}
                sizes="(max-width: 768px) 100vw, 50vw"
                className="mt-1 mb-1 h-auto w-full rounded-lg border-2"
              />
            </section>

            <section className="mt-2 mb-2 rounded-lg bg-white p-4 shadow border-2 border-gray-500/20">
              <h3 className="mt-1 mb-2">The Chart of Accounts (Anonymized)</h3>
              <Image
                src="/assets/ChartofAccountsSchool.JPG"
                alt="The Chart of Accounts (Anonymized)"
                width={1200}
                height={800}
                sizes="(max-width: 768px) 100vw, 50vw"
                className="mt-1 mb-1 h-auto w-full rounded-lg border-2"
              />
            </section>
          </article>
        </div>

        <div className="w-full rounded-lg bg-white p-4 shadow md:w-[50%]">
          <article className="mt-4 mb-4 rounded-lg bg-white p-4 shadow border-2 border-gray-500/20 transform hover:scale-105 transition-transform duration-200">
            <h2 className="mb-2 text-xl font-semibold">3. Wharf Operation System</h2>
            <p className="mb-2 text-sm text-gray-700">
              A windows desktop application designed to support wharf operations including inventory management,
              disbursements and payments, cash receipts, accounts receivables and payables, adjustments, and other
              journal adjustments. The database backend is My SQL.
            </p>
            <p className="mb-2 text-sm text-gray-700">
              <span className="font-semibold">My Role:</span> Sole Developer
            </p>

            <section className="mt-2 mb-2 rounded-lg bg-white p-4 shadow border-2 border-gray-500/20">
              <h3 className="mt-1 mb-2">The Warehouse Inventory System (Anonymized)</h3>
              <Image
                src="/assets/InventoryManagement.JPG"
                alt="The Warehouse Inventory System (Anonymized)"
                width={1200}
                height={800}
                sizes="(max-width: 768px) 100vw, 50vw"
                className="mt-1 mb-1 h-auto w-full rounded-lg border-2"
              />
            </section>

            <section className="mt-2 mb-2 rounded-lg bg-white p-4 shadow border-2 border-gray-500/20">
              <h3 className="mt-1 mb-2">The Inventory Summary Report (Anonymized)</h3>
              <Image
                src="/assets/InventorySummary.JPG"
                alt="The Inventory Summary Report (Anonymized)"
                width={1200}
                height={800}
                sizes="(max-width: 768px) 100vw, 50vw"
                className="mt-1 mb-1 h-auto w-full rounded-lg border-2"
              />
            </section>

            <section className="mt-2 mb-2 rounded-lg bg-white p-4 shadow border-2 border-gray-500/20">
              <h3 className="mt-1 mb-2">The Chart of Accounts (Anonymized)</h3>
              <Image
                src="/assets/ChartofAccounts.JPG"
                alt="The Chart of Accounts (Anonymized)"
                width={1200}
                height={800}
                sizes="(max-width: 768px) 100vw, 50vw"
                className="mt-1 mb-1 h-auto w-full rounded-lg border-2"
              />
            </section>

            <section className="mt-2 mb-2 rounded-lg bg-white p-4 shadow border-2 border-gray-500/20">
              <h3 className="mt-1 mb-2">The Purchase Journal (Anonymized)</h3>
              <Image
                src="/assets/PurchaseJournals.JPG"
                alt="The Purchase Journal (Anonymized)"
                width={1200}
                height={800}
                sizes="(max-width: 768px) 100vw, 50vw"
                className="mt-1 mb-1 h-auto w-full rounded-lg border-2"
              />
            </section>

            <section className="mt-2 mb-2 rounded-lg bg-white p-4 shadow border-2 border-gray-500/20">
              <h3 className="mt-1 mb-2">The Cash Disbursement Journal (Anonymized)</h3>
              <Image
                src="/assets/CashDisbursementJournal.JPG"
                alt="The Cash Disbursement Journal (Anonymized)"
                width={1200}
                height={800}
                sizes="(max-width: 768px) 100vw, 50vw"
                className="mt-1 mb-1 h-auto w-full rounded-lg border-2"
              />
            </section>

            <section className="mt-2 mb-2 rounded-lg bg-white p-4 shadow border-2 border-gray-500/20">
              <h3 className="mt-1 mb-2">The Customer Quotations (Anonymized)</h3>
              <Image
                src="/assets/CustomerQoutations.JPG"
                alt="The Customer Quotations (Anonymized)"
                width={1200}
                height={800}
                sizes="(max-width: 768px) 100vw, 50vw"
                className="mt-1 mb-1 h-auto w-full rounded-lg border-2"
              />
            </section>
          </article>

          <article className="mt-4 mb-4 rounded-lg bg-white p-4 shadow border-2 border-gray-500/20 transform hover:scale-105 transition-transform duration-200">
            <h2 className="mb-2 text-xl font-semibold">4. Company Payroll System</h2>
            <p className="mb-2 text-sm text-gray-700">
              A windows desktop app used to generate semi monthly payroll based on an employee 201 list. It also uses
              lookup tables to compute government required premiums. It has an email facility to send individual payslips
              by email. The database backend is My SQL.
            </p>
            <p className="mb-2 text-sm text-gray-700">
              <span className="font-semibold">My Role:</span> Sole Developer
            </p>

            <section className="mt-2 mb-2 rounded-lg bg-white p-4 shadow border-2 border-gray-500/20">
              <h3 className="mt-1 mb-2">The Employee Master List (Anonymized)</h3>
              <Image
                src="/assets/EmployeeMasterList.JPG"
                alt="The Employee Master List (Anonymized)"
                width={1200}
                height={800}
                sizes="(max-width: 768px) 100vw, 50vw"
                className="mt-1 mb-1 h-auto w-full rounded-lg border-2"
              />
            </section>

            <section className="mt-2 mb-2 rounded-lg bg-white p-4 shadow border-2 border-gray-500/20">
              <h3 className="mt-1 mb-2">The Payroll Register (Anonymized)</h3>
              <Image
                src="/assets/PayrollRegistry.JPG"
                alt="The Payroll Register (Anonymized)"
                width={1200}
                height={800}
                sizes="(max-width: 768px) 100vw, 50vw"
                className="mt-1 mb-1 h-auto w-full rounded-lg border-2"
              />
            </section>

            <section className="mt-2 mb-2 rounded-lg bg-white p-4 shadow border-2 border-gray-500/20">
              <h3 className="mt-1 mb-2">The Employee Payslip (Anonymized)</h3>
              <Image
                src="/assets/EmployeePayslip.JPG"
                alt="The Employee Payslip (Anonymized)"
                width={1200}
                height={800}
                sizes="(max-width: 768px) 100vw, 50vw"
                className="mt-1 mb-1 h-auto w-full rounded-lg border-2"
              />
            </section>

            <section className="mt-2 mb-2 rounded-lg bg-white p-4 shadow border-2 border-gray-500/20">
              <h3 className="mt-1 mb-2">The Email Facility</h3>
              <Image
                src="/assets/EmailFacility.JPG"
                alt="The Email Facility"
                width={1200}
                height={800}
                sizes="(max-width: 768px) 100vw, 50vw"
                className="mt-1 mb-1 h-auto w-full rounded-lg border-2"
              />
            </section>

            <section className="mt-2 mb-2 rounded-lg bg-white p-4 shadow border-2 border-gray-500/20">
              <h3 className="mt-1 mb-2">The Lookup Tables</h3>
              <Image
                src="/assets/LookupTables.JPG"
                alt="The Lookup Tables"
                width={1200}
                height={800}
                sizes="(max-width: 768px) 100vw, 50vw"
                className="mt-1 mb-1 h-auto w-full rounded-lg border-2"
              />
            </section>
          </article>
        </div>
      </div>
    </main>
  )
}
