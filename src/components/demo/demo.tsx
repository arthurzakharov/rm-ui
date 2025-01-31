import { useEffect, useState } from 'react';
import DateSelector from '../date-selector';

const Demo = () => {
  const [value, setValue] = useState<string>('');

  useEffect(() => {
    // console.log('demo', value);
  }, [value]);

  return (
    <div>
      <DateSelector name="demo" value={value} onChange={(value) => setValue(value)} />
    </div>
  );
};

export default Demo;
