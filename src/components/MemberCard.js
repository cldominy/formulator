import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import { TextField, InputAdornment } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({

    card: {
        margin: "20px",
        padding: "20px"
    },
    buttons: {
        display: 'flex',
        justifyContent: 'flex-end',
    },
    button: {
        marginTop: theme.spacing(3),
        marginLeft: theme.spacing(1),
    },
}));

export default function MemberCard({ members, handleMemberChange }) {

    const classes = useStyles();

    return (
        members.map((member, index) => {
            let memberID = `member-${index}`;
            return (
                <Card className={classes.card}>
                    <Typography className={classes.title} gutterBottom>
                        Member Information
                    </Typography>
                    <Grid item xs={12}>
                        <TextField
                            required
                            name="name"
                            id={memberID}
                            label="Member Name"
                            value={member.name}
                            inputProps={{
                                "data-id": index
                            }}
                            fullWidth
                            onChange={handleMemberChange}
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            required
                            name="address1"
                            id={memberID + "-address1"}
                            label="Address line 1"
                            value={member.address1}
                            inputProps={{
                                "data-id": index
                            }}
                            fullWidth
                            onChange={handleMemberChange}
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            name={"address2"}
                            id={memberID + "-address2"}
                            label="Address line 2"
                            value={member.address2}
                            inputProps={{
                                "data-id": index
                            }}
                            fullWidth
                            onChange={handleMemberChange}
                        />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <TextField
                            required
                            name={"city"}
                            id={memberID + "-city"}
                            label="City"
                            value={member.city}
                            inputProps={{
                                "data-id": index
                            }}
                            fullWidth
                            onChange={handleMemberChange}
                        />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <TextField
                            name="state"
                            id={memberID + "-state"}
                            label="State"
                            value={member.state}
                            inputProps={{
                                "data-id": index
                            }}
                            onChange={handleMemberChange}
                            fullWidth
                        />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <TextField
                            required
                            name="zip"
                            id={memberID + "-zip"}
                            label="Zip / Postal code"
                            value={member.zip}
                            inputProps={{
                                "data-id": index
                            }}
                            onChange={handleMemberChange}
                            fullWidth
                        />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <TextField
                            required
                            name="percentage"
                            id={memberID + "-percentage"}
                            label="Percentage Interest"
                            InputProps={{
                                endAdornment: <InputAdornment position="end">%</InputAdornment>,
                            }}
                            value={member.percentage}
                            inputProps={{
                                "data-id": index
                            }}
                            onChange={handleMemberChange}
                            fullWidth
                        />
                    </Grid>
                </Card >
            )
        })
    )
}
