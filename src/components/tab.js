
import React from 'react';
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';
import { Tabs } from 'antd';
import 'antd/dist/antd.css';

const { TabPane } = Tabs;

export default  class  CenteredTabs extends React.Component {
    state={
        selectStructure:"",
        Structures: [
        
            {value:'infirmerie',label:'infirmerie',},
            {value:'maternite',label:'maternite',},
            {value:'dispensaire',label:'dispensaire'},
            {value:'cabinet medical',label:'cabinet medical'},
            {value:'Centre de santé rurale',label:'Centre de santé rurale'},
            {value:'clinique',label:'clinique'},
            {value:'polyclinique',label:'polyclinique'},
            {value:'centre hospitalier',label:'centre hospitalier'},
            {value:'hopital',label:'hopital'},
               
            ],
        Rayon:[
            {value:'quartier',label:'quartier'},
            {value:'localite',label:'localite'},
            {value:'village',label:'village'},
            {value:'ville',label:'ville'},
            {value:'district',label:'district'},
            {value:'arrondissement',label:'arrondissement'},
            {value:'departement',label:'departement'},
            {value:'region',label:'region'},
            {value:'pays',label:'pays'},
            {value:'sous region',label:'sous region'},
            {value:'province',label:'province'},
        ],
        }
        handleChange = (e) => {
            this.setState({ selectStructure: e.target.value })
          }
    render()
    {
    return (
    <div>
          <Tabs defaultActiveKey="1" centered>
          <TabPane tab="Cadre Juridique" key="1">
               <div>
               <form autoComplete="off">
      <div Style="margin-bottom:2%;">
        <TextField Style="width:50%;" required id="standard-required" label="nom de la Structure"/><br></br>
        <TextField Style="width:50%;" label="sigle" /><br></br>
        <TextField Style="width:50%;" label="raison sociale" /><br></br>
        <TextField Style="width:50%;" label="forme sociale" /><br></br>
        <TextField Style="width:50%;" type="number" label="numero statistique" /><br></br>
        <TextField Style="width:50%;" type="number" label="numero regcom" /><br></br>
        <TextField Style="width:50%;" label="reference autorisation ouverture" /><br></br>
        <TextField Style="width:50%;" label="boite postal" /><br></br>
        <TextField Style="width:50%;" required label="pays" /><br></br>
        <TextField Style="width:50%;" required label="province" /><br></br>
        <TextField Style="width:50%;" required label="ville" /><br></br>
        <TextField Style="width:50%;" required label="Téléphone" type="number"/><br></br>
        <TextField Style="width:50%;" label="fax" /><br></br>
        <TextField Style="width:50%;" type="email" label="email" /><br></br>
        <TextField Style="width:50%;" label="site web" /><br></br>
      </div>
    </form>
               </div>
         </TabPane>
         <TabPane tab="cadre Institutionnel" key="2">
            <div>
            <form>
      <div Style="margin-bottom:2%;">
      <TextField
                                    id="standard-select-currency"
                                    Style="width:50%;" 
                                    required
                                    label="type de la Structure"
                                    select
                                    value={this.state.selectStructure}
                                    onChange={this.handleChange}
                                    >
                                    {this.state.Structures.map((option) => (
                                        <MenuItem key={option.value} value={option.value}>
                                            {option.label}
                                        </MenuItem>
                                    ))}
     </TextField><br></br>
        <TextField  Style="width:50%;" type="file" label="photo Structure" /><br></br>
        <TextField  Style="width:50%;" label="Statut Société" /><br></br>
        <TextField  Style="width:50%;" type="file" label="logo Structure" /><br></br>
        <TextField  Style="width:50%;" label="numero patente" /><br></br>
        <TextField  Style="width:50%;" label="numero Contribuable" /><br></br>
        <TextField  Style="width:50%;" label="spécialité" /><br></br>
        <TextField  Style="width:50%;" label="nom Directeur"/><br></br>
        <TextField
                                    id="standard-select-currency"
                                    Style="width:50%;" 
                                    label="rayon couverture"
                                    select
                                    value={this.state.selectStructure}
                                    onChange={this.handleChange}
                                    >
                                    {this.state.Rayon.map((option) => (
                                        <MenuItem key={option.value} value={option.value}>
                                            {option.label}
                                        </MenuItem>
                                    ))}
     </TextField><br></br>
        <TextField  Style="width:50%;" label="effectif" type="number"/><br></br>
      </div>
    </form>
            </div>
        </TabPane>
         </Tabs>

         <button Style="border:none;  height:50px ;text-align:center; 
         font-weight:bold; width:100px; margin-bottom:2%;">
         Submit
         </button>
    </div>
  
  
);

} 
}

