import SlidingPane from 'react-sliding-pane'

export default function UserPane ({visible, data, closePane}) {
    return (
        <SlidingPane
            className='sliding-pane'
            isOpen={visible}
            user={data?.user}
            width={window.innerWidth < 600 ? "100%" : "500px"}
            onRequestClose={closePane}
        >
        <div>
            <pre>{JSON.stringify(data, null, 2)}</pre>
        </div>


        </SlidingPane>
        )
}