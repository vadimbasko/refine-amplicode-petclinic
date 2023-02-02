import {useEffect, useState} from 'react';
import {InitialHookStatus} from '@react-buddy/ide-toolbox';
import {useLogin} from "@pankod/refine-core";
import {authProvider} from "../authProvider";

export const useInitial: () => InitialHookStatus = () => {
    const [status, setStatus] = useState<InitialHookStatus>({
        loading: true,
        error: false,
    });

  useEffect(() => {
    authProvider.login({username: 'admin', password: 'admin'}).then(() => {
      setStatus({loading: false, error: false})
    })
  }, [])

    /*
      Implement hook functionality here.
      If you need to execute async operation, set loading to true and when it's over, set loading to false.
      If you caught some errors, set error status to true.
      Initial hook is considered to be successfully completed if it will return {loading: false, error: false}.
    */
    return status;
};
