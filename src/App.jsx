import JsonDataDisplay from "./components/pii_table";

function App() {
    return (
        <>
            <section className="header text-center m-5">
                <div className="text-3xl"> PII Group Table </div>
            </section>
            <section className="body">
                <div className="App text-center m-10">
                    <JsonDataDisplay />
                </div>
            </section>
            <section className="footer">
                <div className="text-right m-4">
                    <p className="text-gray-300 text-sm">Information collected and recorded by Ms.Kasamaporn Mahatdachkul</p>
                </div>
            </section>
        </>
    );
}

export default App;
