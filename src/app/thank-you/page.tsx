import Image from "next/image";
import Link from "next/link";

const ThankYouPage = async () => {
  return (
    <main className="relative h-screen">
      <div className="hidden lg:block h-80 overflow-hidden lg:absolute lg:h-full lg:w-1/2 lg:pr-4 xl:pr-12">
        <Image
          fill
          src="/checkout-thank-you.jpg"
          className="h-full w-full object-cover object-center"
          alt="thanks for the order"
        />
      </div>

      <div>
        <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:grid lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8 lg:py-32 xl:gap-x-24">
          <div className="lg:col-start-2 space-y-8">
            <p className="text-sm font-medium text-blue-600">
              Order Successful!
            </p>
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
              thanks for ordering
            </h1>
            <p className="text-base text-muted-foreground">
              your order was processed and your assets are available to download
              below.
            </p>
            <Link
              href="/products"
              className="text-sm font-medium text-blue-600 hover:text-blue-500"
            >
              Continue shopping &rarr;
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
};

export default ThankYouPage;
