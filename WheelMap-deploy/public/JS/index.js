    // 페이지가 로딩이 된 후 호출하는 함수입니다.
    function initTmap(){
    // map 생성
    // Tmapv3.Map을 이용하여, 지도가 들어갈 div, 넓이, 높이를 설정합니다.
    var map = new Tmapv3.Map("map_div", { // 지도가 생성될 div
        center : new Tmapv3.LatLng(37.46671695320371, 126.93308346538122),
        width : "100%",	// 지도의 넓이
        height : "100%",	// 지도의 높이
        zoom : 16	// 지도 줌레벨
    });
    //2. 시작 심볼 찍기
    marker_s = new Tmapv3.Marker(
        {
        position: new Tmapv3.LatLng(37.46671695320371, 126.93308346538122),
        icon: "image/MyLocationMarker.png",
        iconSize: new Tmapv3.Size(14, 14),
        map: map
        }
    )
}
    function getKakaoToken(code) {
        let token = "";
        let data = {
            "grant_type": "authorization_code",
            "client_id": REST_API_KEY,
            "redirect_uri": redirectUrl,
            "code": code,
        };

        $.ajax(kakaoTokenApiUrl, {
            data: data,
            dataType: "json",
            method: "POST",
            async: false,
            success: function (resultData) {
            token = resultData.access_token;
            console.log(token);
            }
        }); 

        return token;
    }


    // 3-5. 회원 정보 가져오기
function getKakaoUserInfo(token) {
	$.ajax(kakaoUserApiUrl, {
            headers: {
            'Authorization': `Bearer ${token}`,
            },
            contentType: "application/x-www-form-urlencoded;charset=utf-8",
	        dataType: "json",
            data: JSON.stringify({}),
	        method: "POST",
	        async: false,
	        success: function (resultData) {
	           console.log(resultData);
	    }});
}
