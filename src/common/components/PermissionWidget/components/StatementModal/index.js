import React, { useRef, useState } from "react";
import { ArrowContainer, Popover } from "react-tiny-popover";

export const StatementModal = () => {
  const [isPopoverOpen, setIsPopoverOpen] = useState(false);

  const clickMeButtonRef = useRef();
  return (
    <Popover
      isOpen={isPopoverOpen}
      positions={["top", "right", "left", "bottom"]}
      padding={10}
      onClickOutside={() => setIsPopoverOpen(false)}
      align="end"
      ref={clickMeButtonRef} // if you'd like a ref to your popover's child, you can grab one here
      content={({ position, childRect, popoverRect }) => (
        <ArrowContainer // if you'd like an arrow, you can import the ArrowContainer!
          position={position}
          childRect={childRect}
          popoverRect={popoverRect}
          arrowColor={"white"}
          arrowSize={10}
          className="popover-arrow-container"
          arrowClassName="popover-arrow"
        >
          <div
            className="bg-white text-gray-800 p-4 w-96 rounded-md shadow z-20"
            onClick={() => setIsPopoverOpen(!isPopoverOpen)}
          >
            <h4 className="font-semibold py-2">Statements</h4>
            <p className="py-2">
              Send your statements to your favourite apps with Mono. Your
              information is encrypted using bank grade security.
            </p>
            <p className="py-2">
              Mono will never make your login credentials available to Partners.
            </p>
          </div>
        </ArrowContainer>
      )}
    >
      <button
        className="bg-m-blue-700 text-white px-6 py-2 rounded"
        onClick={() => setIsPopoverOpen(!isPopoverOpen)}
      >
        More info
      </button>
    </Popover>
  );
};

StatementModal.propTypes = {};
