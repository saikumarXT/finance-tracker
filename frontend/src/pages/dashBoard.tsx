import { Button } from "../components/Button";
import Card from "../components/Card";
import { ShareIcon } from "../icons/shareIcon";


function DashBoard() {


function printingName(name:string){
  return name;
}

  return (
    <div>
      <div  className="flex flex-row h-20 bg-white shadow-md">
        <div className=" pr-80">
          <p className="text-2xl mt-3 font-bold text-blue-400 ml-10">Finance Manger</p>
          <p className="text-md text-blue-200 font-serif ml-10">manage your finances with ease</p>
        </div>
        <div className="ml-80 gap-6 flex flex-row justify-end mt-3">
          <Button 
            onClick={() => printingName("sai")}
            text="Add Income"
            variant="secondary"
          /> 

           <Button
            onClick={() => printingName("sai")}
            text="Add Expense"
            variant="secondary"
          /> 
        </div>
      </div>

      <div className="flex flex-row gap-0">

        <div> <Card icon={<ShareIcon/>}  variant='one' amount={1000.00} value1='Spent' value2='This month expenses' />
        </div>

        <div> <Card icon={<ShareIcon/>}  variant='two' amount={1000.00} value1=' Income' value2='This month Income' />
        </div>

        <div> <Card icon={<ShareIcon/>}  variant='three' amount={1000.00} value1=' Balance ' value2='This month Balance' />
        </div>

        <div> <Card icon={<ShareIcon/>} variant='four' amount={1000.00} value1='Average' value2='Per expense' />
        </div>
      </div>
    </div>
  );
}

export default DashBoard;
/*<Card variant='one' amount={1000.00} value1='Total money spent' value2='This month expenses' />
         <Card variant='one' amount={1000.00} value1='Total money spent' value2='This month expenses' />
        */