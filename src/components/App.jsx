import {SectionStatistics} from './SectionStatistics/SectionStatistics'

export const App = () => {
  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101'
      }}
    >

      <SectionStatistics title="Залиште будь-ласка свій відгук" good={0} neutral={0} bad={0} total={0} positivePercentage={0}/>
    
    </div>
  );
};
