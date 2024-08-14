textField.document.designMode="On"; //pour rendre le iframe editable 

function modif(cmd){
  switch(cmd){
   case 'bold': textField.document.execCommand('bold');  break;
   case 'italic': textField.document.execCommand('italic');  break;
   case 'underline': textField.document.execCommand('underline');  break;
   case 'strikeThrough': textField.document.execCommand('strikeThrough');  break;
   case 'backColor': textField.document.execCommand('backColor',true,'yellow');  break;
   case 'fontColor': textField.document.execCommand('fontColor',true,'blue');

  }
}