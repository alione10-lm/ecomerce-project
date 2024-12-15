import Button from "../ui/Button";
import Input from "../ui/Input";
function OrderPage() {
  return (
    <div className="flex items-center w-full h-screen justify-center">
      <form action="">
        <div className="mb-5 flex flex-col gap-2 sm:flex-row sm:items-center">
          <label className="sm:basis-40 text-slate-500 ">First Name</label>
          <div className="grow">
            <Input type={"text"} />
          </div>
        </div>
        <div className="mb-5 flex flex-col gap-2 sm:flex-row sm:items-center">
          <label className="sm:basis-40 text-slate-500">phone number</label>
          <div className="grow">
            <Input type={"text"} />
          </div>
        </div>
        <div className="mb-5 flex flex-col gap-2 sm:flex-row sm:items-center">
          <label className="sm:basis-40 text-slate-500">Address</label>
          <div className="grow">
            <Input type={"text"} />
          </div>
        </div>
        <Button type="primary">order now </Button>
      </form>
    </div>
  );
}

export default OrderPage;
