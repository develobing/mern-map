import { useCallback, useState } from 'react';

const useInput = (initialForm: string) => {
  const [value, setValue] = useState(initialForm);

  const onChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    console.log('useInput - onChange() - value', value);

    setValue(value);
  }, []);

  return {
    value,
    onChange,
  };
};

export default useInput;
