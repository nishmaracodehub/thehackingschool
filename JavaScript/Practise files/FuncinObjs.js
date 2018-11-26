var  a =  {
        b : function()
            {
                return {
                        c : function()
                            {
                                return "hello";

                            }
                    }
                }

            }


console.log(a.b().c());