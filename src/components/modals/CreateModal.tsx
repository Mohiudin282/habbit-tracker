import { Button } from "../Button";
import { Modal } from "./Modal";
import { useUser } from "../../state/user";
import React from "react";

interface Props {
    onClose?: () => void;
}

export const CreateModal = ({ onClose }: Props) => {
    const { createHabit } = useUser();
    const [name, setName] = React.useState("");

    return (
        <Modal className="min-h-fit gap-4" onClose={onClose}>
            <div className="text-center text-xl font-bold sm:px-8">
                Create a habit!
            </div>

            <div>
                <input
                    value={name}
                    placeholder="Name"
                    onChange={(e) => setName(e.target.value)}
                    className="rounded-md border-none bg-black px-2 py-1 outline-none"
                    onKeyDown={(e) => {
                        if (e.key === "ENTER") {
                            createHabit(name);
                            onClose && onClose();
                        }
                    }}
                >
                </input>
            </div>
            <Button
                onClick={() => {
                    createHabit(name);
                    onClose && onClose();
                }}
            >
                Create!
            </Button>
        </Modal>
    );
}