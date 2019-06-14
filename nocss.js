$(document).ready(function(){
    
    var _prefix = 'nocss';
    var _css = $('[class*='+_prefix+']');

    nocss(_css);

    function nocss(csss)
    {
        $('head').append('<style/>');

        $.each(csss, function(){

            var div             = this;
            var css             = $(this).attr('class');
            var _class          = makeid(16,4);

            var firstWord       = css.replace(/ .*/,'');
            var _classable      = firstWord.split('-');

            if(_classable.length > 1)
            {
                var __class = _classable.splice(1);
                _class      = __class.join('-');
            }

            css = css.replace(firstWord,"");
            css = css.split(';');

            var style = '.'+_class+'{';

            $.each(css, function(){

                var _css = this.trim();
                console
                if(_css == "") return ;


                _css = _css.split(':');
                
                var _attribute  = _css[0].trim();
                var _value      = _css[1].trim();
                
                style += _attribute+':'+_value+';';

                // $(div).css(_attribute, _value);
                // $(div).removeAttr("style");

                $(div).removeClass().addClass(_class);

            });
        
            $('style').append(style+'}');
        });
    }

    function makeid(length=12,division = null) {

        var text = "";
        var count = 0;
        var possible = "abcdefghijklmnopqrstuvwxyz";
      
        for (var i = 0; i < length; i++)
        {

            if(division == count && division != null){
                text += '-';
                count = 0;
            }
            text += possible.charAt(Math.floor(Math.random() * possible.length));
            count++;
        }
      
        return text;
      }

});