const adddata = async () => {
        const url = "https://good-amazingly-starling.ngrok-free.app/campusconnectpost/"
        let request = await fetch(url, {
            method: 'POST',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                "name": "test test",
                "roll_no": "1809",
                "enr_no": "2100930094",
                "phno": "7208151141",
                "parents_phno": "9828237278",
                "addr": "test address is here (Akshay 1234)",
                "branch": "TYCO1",
                "percentage": "80",
                "email": "akshay@gmail.com",
                "kt": false,
                "chatid": "1396852654"
            })
        })
    }
