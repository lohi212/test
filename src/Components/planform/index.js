import React, { useState } from "react";
import "./form.css";
import Input from "./input";
const leadSources = ["Zillow", "Realtor", "Ylopo", "Others"];
const sources = ["Google", "Facebook", "Email", "Friends", "Real Closers"]


function PlanForm({ selectedPlan, onSubmit }) {
    const [formValues,setFormValues] = useState({
        name: '',
        email: '',
        phoneNumber:'',
        leads: '',
        totalLeads: '',
        crm: '',
        agents: '',
        leadSource: [],
        sources: [],
        palnQualified: selectedPlan?.planName,
    });

    function renderOptions(options, title, key) {
        return (
        <div style={{ margin: 10 }}>
            <p className="label">{title}</p>
            <div className="checkbox-container">
                {
                    options?.map(source => (
                        <div className="checkbox-field">
                            <input 
                                checked={formValues[key].includes(source)}
                                type="checkbox" 
                                onChange={e => handleFormChange({ checked: e.target.checked, source }, key)}
                            />
                            <label style={{ fontSize: '12px' }}>{source}</label>
                        </div>    
                    ))
                }
            </div>
        </div>
        )
    }

    function handleFormChange(value, key) {
        const newFormValues = { ...formValues };

        if (!['leadSource', 'sources'].includes(key)) {
            newFormValues[key] = value;
        } else {
            const { checked, source } = value;
            if (checked) {
                newFormValues[key].push(source);
            } else {
                const unselectedIndex = newFormValues[key].indexOf(source);
                newFormValues[key].splice(unselectedIndex, 1);
            }
        }

        setFormValues(newFormValues);
    }
    
    function isValid() {
        const errors = [];
        Object.keys(formValues).forEach(key => {
            if (!formValues[key] || !formValues[key].length) {
                errors.push(key);
            }
        });

        return errors.length;
    }

    function handleSubmit() {
        onSubmit();
        setTimeout(() => {
            window.alert(JSON.stringify(formValues, null, 2));
        }, 0);
        
    }

    return (
        <div className="form">
            <div className="form-header">
                Get Started with SquadVoice
            </div>
            <div className="form-body">
                <p style={{ margin: 10 }}><strong>Plan Selected:</strong> {selectedPlan?.planName}</p>
                <Input 
                    title="Name" 
                    value={formValues?.name} 
                    onChange={e => handleFormChange(e.target.value, 'name' )}
                />
                
                <div className="form-field">
                    <Input 
                        title="Email Address" 
                        value={formValues?.email} 
                        onChange={e => handleFormChange(e.target.value, 'email' )}
                    />
                    <Input 
                        title="Phone No." 
                        type="number"
                        value={formValues?.phoneNumber} 
                        onChange={e => handleFormChange(e.target.value, 'phoneNumber' )}
                    />

                    <Input 
                        title="Number of Leads you generate in a month" 
                        type="number"
                        value={formValues?.leads}
                        onChange={e => handleFormChange(e.target.value, 'leads' )}
                    />
                    <Input 
                        title="Total Leads in your CRM." 
                        type="number"
                        value={formValues?.totalLeads} 
                        onChange={e => handleFormChange(e.target.value, 'totalLeads' )}
                    />
                    <Input 
                        title="Which CRM do you have?" 
                        type="number"
                        value={formValues?.crm}
                        onChange={e => handleFormChange(e.target.value, 'crm' )}
                    />
                    <Input 
                        title="No. of Agents" 
                        type="number"
                        value={formValues?.agents}
                        onChange={e => handleFormChange(e.target.value, 'agents' )}
                    />
                </div>    
                {renderOptions(leadSources, "What are your biggest lead source?", 'leadSource')}
                {renderOptions(sources, "How did you hear about us?", 'sources')}
                <button 
                    disabled={isValid()}
                    onClick={handleSubmit}
                    className="button"
                >Submit</button>
            </div>
        </div>
    )
}

export default PlanForm;