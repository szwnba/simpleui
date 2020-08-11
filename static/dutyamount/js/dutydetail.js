(function () {

    // 加载事件
    window.addEventListener('load', function (e) {

        // 一覧明細
        var changeList = $("tr[id^='dutydetail_set-']");
        // 編集リンク削除・追加
        if (changeList) {
            for (i = 0; i < changeList.length; i++) {
                var start="id_dutydetail_set-";
                var end="-trafficAmount";
                var duty_id = start + i + end;

                function formatter(num) {
                      reg = /(?=(\B)(\d{3})+$)/g;
                      var temp = num.replace(',','')
                      var ss = temp.replace(reg,',')
                      return ss
                }
                function unFormatter(num) {
                      var uu = num.replace(',','')
                      return uu
                }
                  // テキストボックスにフォーカス時、フォームの背景色を変化
                $("#"+duty_id).focus(function() {
                    var unValue=$(this).val();
                    var uu = unFormatter(unValue);
                    $(this).val(uu);
                    $(this).css('background-color', 'pink');
                  });
                $("#"+duty_id).blur(function() {
                    var curValue=$(this).val();
                    var amtreg=/^([1-9]\d{0,9}|0)([.]?|(\.\d{1,2})?)$/;
                    if(!amtreg.test(curValue)){
                        alert("正しい金額を入力してください！");
                        return;
                    }
                    var ss = formatter(curValue);
                    $(this).val(ss);
                    $(this).css('background-color', '#ffc');
                  });

             }
        }

        var next = changeList.length-1;
        // 明細一覧のチェックボックスのイベント
        $("a").click(function(){
            var start="id_dutydetail_set-";
            var end="-trafficAmount";
            var duty_nextId = start + next + end;

            function formatter(num) {
                  reg = /(?=(\B)(\d{3})+$)/g;
                  var temp = num.replace(',','')
                  var ss = temp.replace(reg,',')
                  return ss
            }
            function unFormatter(num) {
                  var uu = num.replace(',','')
                  return uu
            }
              // テキストボックスにフォーカス時、フォームの背景色を変化
            $("#"+duty_nextId).focus(function() {
                var unValue=$(this).val();
                var uu = unFormatter(unValue);
                $(this).val(uu);
                $(this).css('background-color', 'pink');
              });

            $("#"+duty_nextId).blur(function() {
                var curValue=$(this).val();
                var amtreg=/^([1-9]\d{0,9}|0)([.]?|(\.\d{1,2})?)$/;
                if(!amtreg.test(curValue)){
                    alert("正しい金額を入力してください！");
                    return;
                }
                var ss = formatter(curValue);
                $(this).val(ss);
                $(this).css('background-color', '#ffc');
              });
            next = next + 1;
        });

    });
})();