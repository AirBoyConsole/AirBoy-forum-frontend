import React, {useEffect, useState} from 'react';
import {ErrorViewState} from "./ErrorViewState";
import EventBus from "js-event-bus";
import {EventNames} from "../../events/EventNames";
import {SetErrorEvent} from "../../events/SetErrorEvent";
import {ErrorViewProps} from "./ErrorViewProps";


function ErrorView(props: ErrorViewProps) {

    const eventBus = new EventBus();

    const [state, setState] = useState<ErrorViewState>({
        error: null,
    });

    useEffect(() => {
        startup();
        return () => cleanup();
    }, []);

    async function startup(): Promise<void> {

        eventBus.on(EventNames.SetError, onSetError);
    }

    function cleanup(): void {
        eventBus.detach(EventNames.SetError, onSetError);
    }

    function onSetError(event: SetErrorEvent): void {

        if (props.containingViewName === event.containingViewName) {

            if (event.error) {

                setState((s) => {
                    return {
                        ...s,
                        error: event.error,
                    };
                });

            } else {

                setState((s) => {
                    return {
                        ...s,
                        error: null,
                    };
                });
            }
        }
    }

    if(state.error == null){
        return null;
    }

    return (
        <>
            {state.error.message}
        </>
    );
}

export default ErrorView;
