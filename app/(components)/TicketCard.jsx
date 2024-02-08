import DeleteBlock from './DeleteBlock'
import PriorityDisplay from './PriorityDisplay'
import ProgressDisplay from './ProgressDisplay';
import StatusDisplay from './StatusDisplay';

const TicketCard = () => {
  return (
    <div className="flex flex-col hover:bg-card-hover bg-card rounded-md shadow-lg p-3 m-2">
      <div className="flex mb-3">
        <PriorityDisplay />
        <div className="ml-auto">
        </div>
      </div>
        <h4 className="mb-1">Ticket Title</h4>
        <hr className="h-px  border-0 bg-page mb-2 "></hr>
        <p className="whitespace-pre-wrap"> This is the Ticket description</p>

        <div className="flex-grow"></div>
        <div className="flex mt-2">
          <div className="flex flex-col">
            <p className="text-xs  my-1">02/08/2024</p>
            <ProgressDisplay />
          </div>
          <div className="ml-auto  flex items-end">
            <StatusDisplay/>
          </div>
        </div>
    </div>
  )
}

export default TicketCard;