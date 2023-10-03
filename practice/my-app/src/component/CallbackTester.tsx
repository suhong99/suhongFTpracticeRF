import { useEffect } from "react"
const CallbackTester: React.FC<any> = ({ onTest }) => {
  useEffect(() => {
    onTest()
  }, [onTest])

  return <div style={{ background: "#red" }}>콜백테스트용</div>
}

export default CallbackTester
