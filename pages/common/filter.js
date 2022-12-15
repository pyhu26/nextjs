import * as React from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

import TextField from '@mui/material/TextField';

export default function filter() {
    return (
        <Container maxWidth="sx">
            <Box component="main" sx={{ flexGrow: 1, p: 3, mt: 2 }}>
                <Typography variant="h4" component="h1" gutterBottom>
                    Filters example
                </Typography>
                <ul>
                    <li>
                        tilter-textbox    
                        <Box
                            component="form"
                            sx={{
                                '& > :not(style)': { m: 1, width: '25ch' },
                            }}
                            noValidate
                            autoComplete="off"
                        >
                            <TextField id="outlined-basic" label="Outlined" variant="outlined" />
                            <TextField id="filled-basic" label="Filled" variant="filled" />
                            <TextField id="standard-basic" label="Standard" variant="standard" />
                        </Box>
                    </li>
                    <li>
                        tilter-numberbox                        
                        <ul> 
                            <li> 문자 입력 불가 </li>
                            <li> 소수점 자리수 설정 </li>                                
                            <li> 천 단위 콤마 표시 </li>                                
                        </ul>
                    </li>
                    <li>
                        tilter-datebox
                        <ul>
                            <li> 일자만 선택 가능 </li>
                            <li> 시간만 선택 가능 </li>
                            <li> 알자 + 시간 선택 가능 </li>
                            <li> 날짜 포맷 yyyy-MM-dd HH:mm:ss </li>
                        </ul>
                    </li>
                    <li>
                        tilter-radiogroup
                        <ul>
                            <li> name으로 표시, 선택 value는 id로 </li>                            
                            <li> data로 동적 구성 </li>                            
                        </ul>
                    </li>
                    <li>
                        tilter-dropdown
                        <ul>
                            <li> multi header 기능 </li>
                            <li> multi header 중 show header설정 </li>
                            <li> multi check 기능 </li>
                        </ul>
                    </li>
                    <li>
                        filter-common
                        <ul>
                            <li> submit 시, 필수 조건 유효성 검증 </li>                            
                            <li> 포맷 유효성 검증 (날짜) </li>                            
                            <li> 필수 조건 표시 기능 </li>
                            <li> 현재 value 반환 공통 함수 </li>
                            <li> 현재 text 반환 공통 함수 </li>
                        </ul>
                    </li>                    
                </ul>
            </Box>
        </Container>
    );
}