/**
 * Created by muzrea on 18-6-16.
 */
var differentWindow = {number: [1,2,3,4,5,6,7],color: ["black","yellow","green","pink","chartreuse"]};
var counter = 1;
var i=0;
var windowsStyle = {
    backgroundColor: `{differentWindow.color[counter]}`,
    height: 100,
    width: 200,
    top: 0,
    left: 0
};
function ActionLink() {
    function handleClick(e) {
        e.preventDefault();
        let str = `./newWindow${differentWindow.number[counter]}.html`;
        let strTop = 130;
        // switch (counter){
        //     case 1:
        //         window.open(str,'newWindow',`height=100,width=400,top=${strTop},left=400`);
        //     case 2:
        //         open(str,"window2","toolbars=0,scrollbars=0,location=0,statusbars=0,menubars=0,resizable=0,width=320,height=380");
        //     case 3:
        //         var address=window.showModalDialog(str,"window3","dialogWidth=320px,dialogHeight=380px");
        //         // document.myform.txtInfo.value=address;
        //     default:
        //
        // }
        window.open(str,'newWindow',`height=100,width=400,top=${strTop},left=400`);
        let opener = window.open(str,'newWindow',`height=100,width=400,top=${strTop},left=400`);
        // opener.open(str,'newWindow',`height=100,width=400,top=${strTop},left=400`);
        document.body.style.background = differentWindow.color[counter++];
        // open("str","mywindow","toolbars=0,scrollbars=0,location=0,statusbars=0,menubars=0,resizable=0,width=320,height=380");
        console.log('The link was clicked.');
        // counter++;
        strTop+=300;
        console.log(counter);
    }

    return (
        <button onClick={handleClick}>
            add
        </button>
    );
}

ReactDOM.render(
    <ActionLink />,
    document.getElementById('windows')
);