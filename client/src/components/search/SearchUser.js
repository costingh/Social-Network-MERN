import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import { withStyles } from '@material-ui/styles'

const styles = ({
  '.MuiOutlinedInput-notchedOutline': {
    borderColor: '#cdd1d9 !important'
  }
});

function SearchUser({listOfContacts, classes}) {
  return (
    <div style={{ width: '100%' }}>
      <Autocomplete
        freeSolo
        id="searchContact"
        disableClearable
        options={listOfContacts.map((option) => option._id)}
        renderInput={(params) => (
          <TextField
            {...params}
            label="Search input"
            margin="normal"
            variant="outlined"
            InputProps={{ ...params.InputProps, type: 'search' }}
          />
        )}
      />
    </div>
  );
}

export default withStyles(styles)(SearchUser);
